var myObject = new Object();
myObject.intProp = 23;
myObject.strProp = "Hi!";

console.log(myObject.intProp); 
console.log(myObject.strProp); 

delete myObject.intProp;
console.log(myObject.strProp); 