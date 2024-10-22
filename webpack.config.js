const path = require('path');

module.exports = {
    entry: {
        vendor: ['jquery', 'lodash'], // Add your libraries here
        main: './js/main.js'            // Your main script
    },
    output: {
        filename: '[name].js',          // Outputs vendor.js and main.js
        path: path.resolve(__dirname, 'dist') // Output directory
    }
};
