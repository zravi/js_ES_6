/*
inheritance : constructor overriding 
super() method
The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
*/


class A {
    constructor() {
        console.log("Class A , parent constructor method invoked");
    }
    aData() {
        console.log("Class A , aData method invoked");
    }
}
class B extends A {
    constructor() {
        // super method to class parent   
        super();
        console.log("Class B , child constructor method invoked");
    }
    bData() {
        console.log("Class B , bData method invoked");
    }
}
var obj = new B();
obj.aData();
obj.bData();
