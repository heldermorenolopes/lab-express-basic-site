const express = require('express');
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

app.set('pages', __dirname + '/pages');

app.get('/about-page', (request, response, next) => {
    response.sendFile(__dirname + '/pages/about-page.html');
});

app.get('/gallery-page', (request, response, next) => {
    response.sendFile(__dirname + '/pages/gallery-page.html');
});

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/pages/home-page.html');
});

//Starts the backend server listening on port xxxx
app.listen(3000, () => {
    console.log('Starting the app');
});