function authMiddleware(req, res, next){
    if (!req.session.userLogged) {
        return res.redirect('/user/ingreso');
    }
    next();
}

module.exports = authMiddleware;