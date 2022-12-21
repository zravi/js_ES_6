// encapsulation restriction reason
class Employee {
    setEmployee(eno, enm) {
        this.eno = eno;
        this.enm = enm;
    }
    showEmployee() {
        console.log("Eno :", this.eno);
        console.log("eno before changes = " + obj.eno);
        console.log("Enm :", this.enm);
    }
}

var obj = new Employee();
obj.setEmployee(1001, "Jarvis");
obj.showEmployee();

console.log("Eno outside class :" + obj.eno);
obj.eno = 8454765; // re-initialisation of a class member outside a class is a fault of encapsulation
console.log("eno after changes = " + obj.eno);
