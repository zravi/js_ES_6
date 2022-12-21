// Prototype

function Employee() {
   this.eno = 1001;
   this.enm = "Jany";
   this.esal = 10000.56;
   this.edes = "trainer";

   this.showDetails = (a,b) => {
      console.log("Employee Details");
      console.log("Eno :", this.eno);
      console.log("Enm :", this.enm);
      console.log("Esal :", this.esal);
      console.log("Edes :", this.edes);
      return a + b;
   }

}

var obj = new Employee();
//console.log(obj);
var add=obj.showDetails(10,20);
console.log("Addition = "+add);

