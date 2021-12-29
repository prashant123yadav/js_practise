var myObject = new Object();
myObject.intProp = 23;
myObject.strProp = "Hi!";

console.log(myObject.intProp); // 23
console.log(myObject.strProp); // Hi!

delete myObject.intProp;

console.log(myObject.intProp); // undefined
console.log(myObject.strProp); // Hi!