// Synchronous function
// setInterval

console.log("Before function execution");

function demo() {
    console.log("Demo function invoked");
}
setTimeout(demo, 3000);
var t = setTimeout(demo, 3000);
var flag = true;
if (flag == true)
    clearTimeout(t);

console.log("After function execution");
