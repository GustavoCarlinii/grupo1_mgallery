const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    let emailCookie = req.cookies.emailUsuario;

    if (emailCookie) {
        db.User.findOne({ where: { email: emailCookie } })
        .then(usuarioCookie => {
            if (usuarioCookie) {
                req.session.userLogged = usuarioCookie;
            }
            if (req.session && req.session.userLogged) {
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged;
            }
        next();
        })
        .catch(err => {
            console.log(err);
            next(err);
        });
    }else {
        next();
    }
}
module.exports = userLoggedMiddleware;