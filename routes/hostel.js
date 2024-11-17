const express = require('express');
const router = express.Router();

router.post('/add', (req, res) => {
    res.send('Hostel Added');
});

module.exports = router;