const squre = require('./squre.js')
const shape = require('./shape')

console.log("area of the squre" , square.area(5))
console.log("perimeter of the square" ,squre.perimeter(5))

const myshape = new shape ("hexagon" , 6)
 
myshape.info()