printName("Rotimi")
// HOISTING IN JS

function printName(name){
    console.log(name)
}

//Var Hoisting 

console.log(x)
var x = 6





/* Note however that initialization also causes declaration (if not already declared). 
The code snippet below will work, because even though it isn't hoisted, the variable is initialized and effectively declared before it is used.
*/
a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b

console.log(`${a}${b}`); // 'Cranberry'


// Let hOisting 
/* Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. 
An exception will be thrown if a variable declared with let or const is read before it is initialized.
*/
console.log(y)
let y = 5