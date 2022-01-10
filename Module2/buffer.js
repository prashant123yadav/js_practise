
const buf1 = Buffer.alloc(10)
console.log(buf1)

const buf2 = Buffer.alloc(5,10)
console.log(buf2)

const buf3 = Buffer.allocUnsafe(10)
console.log(buf3)

buf3.fill(3)
console.log(buf3)

buf2.write('abcdef')
console.log(buf2)

const buf4 = Buffer.from([255,6.5,-255,'7'])
console.log(buf4)

const buf5 = Buffer.from("hello world")
console.log(buf5)

console.log(buf5.toString()) 


const buf6 = Buffer.from([255,257])
console.log(buf6)