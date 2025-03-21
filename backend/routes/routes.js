// backend/routes.js
const express = require('express');
const path = require('path');  // Don't forget to require 'path' here
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'index.html'));
});

// Projects page route
router.get('/projectfs', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'projects.html'));
});

// Contact page route
router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'contact.html'));
});

// About page route
router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'about.html'));
});

// FAQ page route
router.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'faq.html'));
});

module.exports = router;
