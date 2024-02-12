const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

//handle other routes by serving index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

//HTTPS options
/*
const options = {
    key: fs.readFileSync('path to key file'),
    cert: fs.readFileSync('path to certfile'),
    ca: fs.readFileSync('path to ca.pem'),
}
*/

// CREATE HTTPS SERVER
//const server = https.createServer(options, app);

// start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
})

// start HTTPS server
/*
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
})
*/