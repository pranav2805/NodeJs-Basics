const fs = require('fs');

const requestHandler = (req, res) =>{
    const url = req.url;
    const method = req.method;

    
    if(url === '/') {
        //Reading from file
        fs.readFile('message.txt', (err, data) => {
            //Returning the html page as response
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body><p>${data}</p>`)
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>')
            res.write('</html>');
            return res.end();
        })
        // res.write('<html>');
        // res.write('<head><title>Enter Message</title></head>');
        // res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>')
        // res.write('</html>');
        // return res.end();
    }
    
    //if the url contains 'message'
    if(url === '/message' && method==='POST') {
        const body = [];
        //getting chunk of data
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        //converting chunk of data into meaningful data
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    
    //homepage
    if(url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home page</title></head>');
        res.write('<body><h1>Welcome to Home Page</h1></body>')
        res.write('</html>');
        return res.end();
    }
    
    //about us page
    if(url === '/about') {
        res.write('<html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/node') {
        //console.log(req.url, req.method, req.headers);
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('</html>');
        res.end();
    }
}

//Exporting in three diff ways
//module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Hard coded text'
// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'Hard coded text';

exports.handler = requestHandler;
exports.someText = 'Hard coded text'