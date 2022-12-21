// Prototype
// Function Prototype and Function Definition
/*
The key difference between the function prototype and function definition is that the function prototype only contains the declaration of the function while the function definition contains the actual implementation of the function.
*/

function Employee() {
    var a = 100;
    this.eno = 1001;
    this.enm = "Jany";
    this.esal = 10000.56;
    this.edes = "trainer";
}

var obj = new Employee();
// console.log(obj);
console.log("Employee Details");
console.log("Eno :", obj.eno);
console.log("Enm :", obj.enm);
console.log("Esal :", obj.esal);
console.log("Edes :", obj.edes);