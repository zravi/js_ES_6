// url module
// The URL module splits up a web address into readable parts.
import * as http from 'http';

http.createServer((req, res) => {
   // console.log(req.url);
   var msg;
   res.writeHead(200, { "Content-Type": "text/html" });
   if (req.url == "/" || req.url == "/home")
      msg = "<h1>/ or /home url invoked</h1>";
   // msg = "<h1>/ or /home url invoked</h1>";
   else if (req.url == "/about")
      msg = "<h1>/about url invoked</h1>";
   else if (req.url == "/contact")
      msg = "<h1>/contact url invoked</h1>";
   else if (req.url == "/service")
      msg = "<h1>/service url invoked</h1>";
   else if (req.url == "/register")
      msg = "<h1>/register url invoked</h1>";
   else if (req.url == "/login")
      msg = "<h1>/login url invoked</h1>";
   else
      msg = "<h1>Invalid url invoked</h1>";
   res.write(msg);
   res.end();
}).listen(8081);
console.log("Server invoked at link http://localhost:8081");