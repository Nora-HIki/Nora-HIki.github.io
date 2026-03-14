const fs = require('fs');
const path = require('path');

module.exports = function() {
  // Path to your images relative to the project root
  const dirPath = path.join(__dirname, '../assets/main_layout/middle/');
  
  // Read the directory and filter for images
  try {
    const files = fs.readdirSync(dirPath);
    return files.filter(file => /\.(png|jpe?g|webp)$/i.test(file));
  } catch (e) {
    console.error("Error reading characters folder:", e);
    return []; // Return empty array if folder is missing
  }
};
