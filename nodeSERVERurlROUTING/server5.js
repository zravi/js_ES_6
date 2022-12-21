/* 
URL routing
-----------
It is a mechanism to redirect from one application URL to another

URL parse
---------
js or split a URL into readable parts and extract search parameters using built-in Node. js URL module. To parse URL in Node. js : use url module, and with the help of parse and query functions, you can extract all the components of URL.

URL.pathname
------------
The pathname property of the URL interface is a string containing an initial / followed by the path of the URL, not including the query string or fragment (or the empty string if there is no path).
*/

import * as http from 'http';
import * as url from 'url';

http.createServer((req, res) => {
   var urlobj = url.parse(req.url, true);
   var urlroute = "<h2>Click on the link below to redirect</h2><a href='/home'>Home page</a><br/><br/><a href='/about'>About page</a><br/><br/><a href='/contact'>Contact page</a><br/><br/><a href='/service'>Service page</a><br/><br/><a href='/register'>Register page</a><br/><br/><a href='/login'>Login page</a><br/><br/>";

   var msg;
   if (urlobj.pathname == "/" || urlobj.pathname == "/home")
      msg = "<h1>/ or /home url invoked</h1>";
   else if (urlobj.pathname == "/about")
      msg = "<h1>/about url invoked</h1>";
   else if (urlobj.pathname == "/contact")
      msg = "<h1>/contact url invoked</h1>";
   else if (urlobj.pathname == "/service")
      msg = "<h1>/service url invoked</h1>";
   else if (urlobj.pathname == "/register")
      msg = "<h1>/register url invoked</h1>";
   else if (urlobj.pathname == "/login")
      msg = "<h1>/login url invoked</h1>";
   else
      msg = "<h1>Invalid url invoked</h1>";
   res.write(msg + urlroute);
   res.end();
}).listen(8081);
console.log("Server invoked at link http://localhost:8081");