const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    mainImage: { type: String, required: true }, // URL or file path of the display image
    projectType: { type: String, enum: ['Residential', 'Commercial', 'Industrial'], required: true },
    projectName: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    services: { type: [String], required: true }, // Array of services provided
    overview: { type: String, required: true },
    projectImages: { type: [String], required: true }, // Array of image URLs/paths
    clientTestimonial: { type: String, required: true },
    clientDetails: { 
        name: { type: String, required: true },
        company: { type: String, required: true },
        position: { type: String, required: true }
    }
}, { timestamps: true }); // Enables createdAt and updatedAt

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
