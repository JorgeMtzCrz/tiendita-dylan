const router = require('express').Router()
const { createBanner, getAllBanners, updateBanner, oneBanner, deleteBanner } = require('../controllers/bannerControllers')

router.post('/create', createBanner)
router.get('/all', getAllBanners)
router.get('/detail/:id', oneBanner)
router.patch('/update/:id', updateBanner)
router.delete('/delete/:id', deleteBanner)

module.exports = router