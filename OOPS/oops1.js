// OOP's : data member + member method
// local parameters

class Add {
    addData() {
        // local parameters   
        var a, b, c;
        a = 100;
        b = 200;
        c = a + b;
        console.log("a = " + a);
        console.log("b = " + b);
        console.log("add = " + c);
        return a;
    }
}

var obj = new Add();
var a = obj.addData();
// console.log("A = " + a);