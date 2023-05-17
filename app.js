const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home page</title></head>');
        res.write('<body><h1>Welcome to Home Page</h1></body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/about') {
        res.write('<html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/node') {
        // console.log(req.url, req.method, req.headers);
        // res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>');
        res.end();
    }
});

server.listen(3000);