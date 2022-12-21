// http module - reduce code complexity 

import * as http from 'http';

http.createServer((req, res) => {
    res.write("<h1>Welcome to world of Node server</h1>");
    res.end();
}).listen(8081);
console.log("Server invoked at link http://localhost:8081");
/*
response.send and response.write in node js
*/