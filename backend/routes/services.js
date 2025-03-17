const express = require('express');
const path = require('path');

const router = express.Router();

// Dynamic route for services (e.g., /services/service-1, /services/service-2)
router.get('/:serviceName', (req, res) => {
    const serviceName = req.params.serviceName;  // Get the dynamic part from the URL
    const filePath = path.join(__dirname, '..', '..', 'frontend', 'services', `${serviceName}.html`);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("Service page not found");
        }
    });
});

module.exports = router;
