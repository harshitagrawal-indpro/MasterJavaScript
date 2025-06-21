// by Objects demo

const student = {
    firstName :"Shashank",
    lastName :"Kotagi",
    dob : "10 Feb 2005",
    pin : 1563002,
    displayName : function(){
        return this.firstName + " " + this.lastName;
    }

}
const ok =student.displayName();
console.log(ok);