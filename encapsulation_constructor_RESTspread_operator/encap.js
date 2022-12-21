class encapsula{
    setEmployee(eno, enm) {
        this.eno = eno;
        this.enm = enm;
    }
    showEmplyee() {
        console.log("eno = "+this.eno);
        console.log("enm = "+this.enm) ;
    }
}

var obj = new encapsula();
obj.setEmployee(1, "TATA");
obj.showEmplyee();
console.log("Details before changes");
console.log("eno outside = "+obj.eno) ;
console.log("enm outside = " + obj.enm);

obj.eno = 1222;
obj.enm = "iudgfdigf";
console.log("Details after changes");
console.log("eno outside = " + obj.eno);
console.log("enm outside = " + obj.enm);
