const usuairoCtrl = {};

usuairoCtrl.mostrar = (req, res, next) => {
  res.render('tienda/tiendaAgregar');
}
module.exports = usuairoCtrl;