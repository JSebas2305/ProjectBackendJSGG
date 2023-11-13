const express = require('express');
const router  = express.Router();
const apiController = require('../controllers/apiController')

router.get('/info', apiController.testApi);
router.get ('/lista', apiController.getApi)
router.post('/crear', apiController.postApi)
router.patch('/editharth', apiController.patchApi)
router.put('/editart', apiController.putApi)
router.delete('/borrar', apiController.deleteApi)

module.exports = router