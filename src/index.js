const http = require("http");

const users = require('./mocks/users');

const server = http.createServer((req, res) => {
    console.log(`Request Method: ${req.method} | Request Endpoint: ${req.url}`)

    if(req.url === '/users' && req.method === 'GET'){
        res.writeHead(200, {'Content-Type' : 'aplication/json'});
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.end(`Cannot ${req.method} ${req.url}`);  
    }
    
    // res.writeHead(200, {'Content-Type' : 'text/html'});
    // res.end('<h1>Hello World!</h1>')
});

server.listen(3000, () => console.log("Server started at http://localhost:3000"));