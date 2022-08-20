const express = require('express');
const router = express.Router();

const homeController = require('../controller/home-controller');

router.get('/',homeController.homePage);
router.post('/urls',homeController.allUrls);
router.get('/:shortUrlLink',homeController.shortUrls);

module.exports = router;