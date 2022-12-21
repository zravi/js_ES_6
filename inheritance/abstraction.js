/*
Abstraction
-----------
The concept of Abstraction in JavaScript is to hide the implementation details and
highlight an object's essential features to the users.
That's how embedding Abstraction in a JavaScript program can enhance the readability of the code 
and avoid duplication.
            or
An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.            
*/

class Employee {
   #eno;
   #enm;
   setEmployee(eno, enm) {
      this.#eno = eno;
      this.#enm = enm;
   }
   showEmployee() {
      console.log("Eno :", this.#eno);
      console.log("Enm :", this.#enm);
   }
}

var obj = new Employee();
obj.setEmployee(1001, "Jarvis");
obj.showEmployee();

//obj.#eno=0;
//console.log(obj.#eno);

