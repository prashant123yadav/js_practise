class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    static info()
    {
       console.log("i am a person of class , nice to meet you")
    }
}
 const sonu = new person("sonu" , 20)
 person.info()