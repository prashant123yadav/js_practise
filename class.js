class person{
    constructor (name,age){
        this.name = name;
        this.age = age;
    }
    greet()
    {
        console.log(`hello , my name is ${this.name} and i am ${this.age} year old`)
    } 
     fairwell()
     {
         console.log(`goodbye friends`)
     }
}
const sonu = new person("sonu yadav",20)
sonu.greet()
sonu.fairwell()