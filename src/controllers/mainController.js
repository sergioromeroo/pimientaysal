const platosdb = require('../data/platosdb')

module.exports ={
    index : (req, res) => {
       return res.render('index', {
           platos : platosdb,
           titulo : "Pimienta y Sal",
           description1About : "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
           description2About : "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
       });
    },
    detail : (req, res) => {
        let plato = platosdb.find(plato => plato.id === +req.params.id);
        return res.render('detalleMenu',{
            plato,
        });
    }
}
