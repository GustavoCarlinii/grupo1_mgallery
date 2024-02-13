const db = require('../../database/models');
const Op = db.Sequelize.Op;


const usersAPIController = {
    'list': async (req, res) => {
        const count = await db.User.count();
        console.log(count);

        const users = await db.User.findAll({
            attributes: ['id', 'first_name', 'last_name', 'email', ],
        })

        const userArray = users.map(user => {
            const detailUrl = `/api/users/${user.id}`;
            return {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                detailUrl: detailUrl
            }
        })

        const result = {
            meta: {
                status: 200,
                count: count,
            },
            data: userArray
        };

        res.json(result);
    },

    'detail': async (req, res) => {

        const user = await db.User.findByPk(req.params.id, {
            attributes: ['id', 'first_name', 'last_name', 'email', 'img', 'adress', 'phone', 'birthdate','postal_code', 'cities_id',],
    
        })

        if (!user) {
            return res.status(404).json({ error: 'El Usuario no existe' });
        }


        const detailUrl = `/api/users/${user.id}`;
        const img = user.img;
        const userData = {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role: user.role_id,
            postal_code:user.postal_code,
            birthdate:user.birthdate,
            phone:user.phone,
            adress:user.adress,
            cities_id:user.cities_id,
            img: `/images/user/${img}`,
            detailUrl: detailUrl

        }


        const result = {
            data: userData
        };


        res.json(result);
    },

    'search': (req, res) => {
        db.User
            .findAll({
                where: {
                    name: { [Op.like]: '%' + req.query.keyword + '%' }
                }
            })
            .then(users => {
                return res.status(200).json(users);
            })
    }
}

module.exports = usersAPIController;