

var express = require('express');
var router = express.Router();
var db=require("../conexion/conexion");


/* GET home productos. */
router.get('/', function (req, res, next) {

    db.query("SELECT * FROM `tblproductos`", function (err, resultados) {

        console.log(resultados);
        res.render('productos', { title: 'NUESTROS PRODUCTOS EN STOCK', arpones:resultados });
    });


    
});

module.exports = router;