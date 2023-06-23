var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Express' });
});

/* GET home nosotros. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'NUESTRO EQUIPO' });
});



/* GET home direccion. */
router.get('/direccion', function(req, res, next) {
  res.render('direccion', { title: 'UBICACION' });
});

/* GET home formulario */
router.get('/formulario', function(req, res, next) {
  res.render('formulario', { title: 'Complete los datos' });
});

router.get('/empleados', function(req, res, next) {
  res.render('empleados', { title: 'empleados' });
});








module.exports = router;
