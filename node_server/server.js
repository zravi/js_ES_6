/*
HTTP module
-----------
The HTTP module creates an HTTP server that listens to server ports and gives a res back to the client.
*/

import * as http from 'http';

http.createServer((req, res) => {
  res.write("<h1>Welcome to world of Node server</h1>");
  res.end();
}).listen(8081, (error) => {
  // listen() method creates a listener on the specified port or path.
  if (error)
    console.log(error);
  else
    console.log("Server invoked at link http://localhost:8081");
});


