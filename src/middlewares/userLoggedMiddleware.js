const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  if (req.body.recordarUsuario){
    let emailCookie = req.cookies.emailUsuario;

    if (emailCookie) {
      db.User.findOne({ where: { email: emailCookie } })
        .then((usuarioCookie) => {
          if (usuarioCookie) {
            req.session.userLogged = usuarioCookie;
          }
          
          next();
        })
        .catch((err) => {
          console.log(err);
          next(err);
        });
    } else {
      next();
    }
  } else {
    next();
  }
}
module.exports = userLoggedMiddleware;