const exress= require ('express');
const router = express.Router();

const sucursalesController =require('../controller/sucursaleController')

router.get('/',sucursalesController.index)
router.get('/:sucursal',sucursalesController.id);


module.exports = router
