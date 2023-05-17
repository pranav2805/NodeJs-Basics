const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Hi! My name is Pranav');
});

server.listen(3000);