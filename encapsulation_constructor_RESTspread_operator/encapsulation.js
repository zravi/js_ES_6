/*
Encapsulation
Encapsulation is the bundling of "data and the methods" that act on that data such that access to     that data is restricted from outside the bundle
                  or 
Encapsulation is the bundling of data and the methods that act on that data such that access to that data is restricted from outside the bundle,
*/

class Employee {
   setEmployee(eno, enm) {
      this.eno = eno;
      this.enm = enm;
   }
   showEmployee() {
      console.log("Eno :", this.eno);
      console.log("Enm :", this.enm);
   }
}

var obj = new Employee();
obj.setEmployee(1001, "Jarvis");
obj.showEmployee();

console.log("Eno outside class :" + obj.eno);
