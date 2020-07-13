const express =require('express');
const router = express.Router();
const marcaController = require('../controller/marcaController');

router.get('/', marcaController.index);
router.get('/:marca',marcaController.id)

module.exports=router