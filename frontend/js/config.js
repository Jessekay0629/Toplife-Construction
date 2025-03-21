const API_BASE_URL = "https://toplife-construction.onrender.com";

const API_ENDPOINTS = {
    latestProjects: `${API_BASE_URL}/api/projects/latest`, // Home Page
    allProjects: `${API_BASE_URL}/api/projects`, // Projects Page
    contactForm: `${API_BASE_URL}/contact/send-email`, // Contact Form
    projectDetails: (projectId) => `${API_BASE_URL}/api/projects/${projectId}` // Specific Project
};

export default API_ENDPOINTS;
