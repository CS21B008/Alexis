const express = require('express');
const router = express.Router();
const { postMediData,postPermit} = require('../controllers/MedicineControl');
router.route('/mediinfo').post(postMediData);
router.route('/permit').post(postPermit);
module.exports = router;