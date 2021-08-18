const router = require('express').Router();

const uploadCloud = require('../config/cloudinary');
const { upload } = require('../controllers/uploadControllers');

router.post('/upload', uploadCloud.array('docs', 5),upload)

module.exports = router;
