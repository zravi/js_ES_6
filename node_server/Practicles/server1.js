// Code complexcity
import * as http from 'http';
http.createServer((req, res) => {
    res.write("<h2>Welcome to world of Node server..........</h2>");
    res.write("<h2>This is server</h2>");
    res.end();
}).listen(8081);
console.log("Server invoked at link http://localhost:8081");
