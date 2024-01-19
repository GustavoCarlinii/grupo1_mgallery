const db = require('../database/models');
//const productsFilePath = path.join (__dirname, '') // entre '' se coloca la ruta del json en la ejercitación, pero para la base de datos??

//async function getUsers() {
  //  const users = await User.findAll();
    //return users;
//}

const userController = {
    formIngreso(req, res){
        res.render("formIngreso.ejs")
    },
    formRegistro(req, res){
        res.render("formRegistro.ejs")
    },
    //index(req, res){
   //    res.render("home", {users: getUsers()}); //se renderiza la vista home.ejs con el listado de obras
   // },
    async store(req, res){
        try {
            const user = {
                ...req.body
                //img: req.file?.filename             
           };
            console.log(user);
            await db.User.create(user);
            return res.redirect('/')
        } catch (error) {
            return res.status(500).send(error);
        }

    },
    edit(req, res){
        const users = getUsers();
        const indexUser = users.findIndex(users => users.id == req.params.id);
        users[indexUser] = {
            ...users[indexUser],
            ...req.body
        }
        // ver como impactar estos cambios en la base de datos, en teoría aca ya estaría creado el array con todos los datos para persistir el cambio
        res.redirect('/');
    },
}

module.exports = userController;