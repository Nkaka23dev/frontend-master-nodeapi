const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.statusCode =  200;
        console.log("HELLO THERE FROM THE SERVER")
        res.end();
    }
})

server.listen(3001, () => {
    console.log("Server is live and running on the port: 3001")
})