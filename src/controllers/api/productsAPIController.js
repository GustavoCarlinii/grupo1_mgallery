const db = require('../../database/models');
const Op = db.Sequelize.Op;


const productsAPIController = {
    'list': async (req, res) => {
        const count = await db.ArtWorks.count();
        const products = await db.ArtWorks.findAll({
            attributes: ['id', 'name', 'description'],
        });

        const productArray = products.map(product => {
            const detailUrl = `/api/products/${product.id}`;
            return {
                id: product.id,
                name: product.name,
                description: product.description,
                detail: detailUrl
            };
        });

        const result = {
            count: count,
            products: productArray
        };

        res.json(result);
    },

    'detail': async (req, res) => {
        const product = await db.ArtWorks.findByPk(req.params.id, {
        });

        if (!product) {
            return res.status(404).json({ error: 'El producto no existe' });
        }

        const img = product.img;

        const result = {
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.prices,
            img: `/images/products/${img}`,
            user: product.user_id
        };

        res.json(result);
    },

    'search': (req, res) => {
        db.Product
            .findAll({
                where: {
                    name: {[Op.like]: '%' + req.query.keyword + '%'}
                }
            })
            .then(products => {
                return res.status(200).json(products);
            })
    }
}

module.exports = productsAPIController;