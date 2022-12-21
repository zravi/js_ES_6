// http module
import * as http from 'http';
// The createServer method creates a server on your computer
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Welcome to world of Node server</h1>");
    res.end();
}).listen(8080);
console.log("Server invoked at link http://localhost:8080");

/*
writeHead()
---------
an inbuilt property of the 'http' module which sends a response header to the request
*/