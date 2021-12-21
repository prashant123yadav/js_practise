const car = {
wheels : 4,
color:"red",
drive : function() {
console.log("wroom wroom")  
    }
}
console.log(Object.keys (car)[0])         // wheels 
console.log(typeof Object.keys (car)[0])  //string
car.drive();
// wroom wroom