class Person {
    constructor(name , age){
    this.name = name ;
    this.age = age;
}
 greet(){
     console.log(`hello , my name is ${this.name} and i am ${this.age} year old`)
 }
}
 class adult extends Person{
     constructor(name , age , work){
     super(name,age);
     this.work = work ;
 }
}
const sonu = new adult("sonu" , 20 , "softwere developer");
console.log(sonu.age)
console.log(sonu.work)
sonu.greet();