
var name = "Shawn"; 
var age = 28;
var name_object = {first_name: "Shawn", lastName: "Jura"}
var truth = true;
var sheet = ["HTML", "CSS"]
var a = null; 

var students = {
first_name: "Shawn",
lastName: "Jura",
age: 28,
height: 180,

fullName : function(){
    return this.first_name+" "+this.lastName
}
}
const ageValue = students.age

console.log(ageValue)
console.log(students.fullName())
