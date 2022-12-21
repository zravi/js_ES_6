// Setter & Getter method
// Setter : used to set value to class parameter
// Getter : used to get value of class parameter

class Add {
   setAdd(a, b) {
      this.a = a;
      this.b = b;
   }
   addData() {
      this.c = this.a + this.b;
   }
   getAdd() {
      return { "a": this.a, "b": this.b, "c": this.c };
      // returning an object
   }
}
var obj = new Add();
obj.setAdd(100, 200);
obj.addData();
var res = obj.getAdd();
console.log("a = " + obj.getAdd().a);
console.log("b = " + res.b);
console.log("add = " + res['c']); // array form (key name)