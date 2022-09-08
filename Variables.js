/*
  Let Vs Var vs const 
  
   Let is Scoped , Var  is not scoped .Const can not be changed unless it is a object 

*/

 

if (true){
    var var1 = " hello var";
}
console.log(var1)

if (true){
    let var2 = " hello let ";
    console.log(var2)
}
// console.log(var2)

const const_object = { name:"Thor"}
const_object.name = "thor odinson"

console.log(const_object.name)

console.log(x)
var x = "cool example"