var Student = function(name ,age){
    this.name = name;
    this.age = age;
    this.birthday = function(){
        this.age++;

    }
}
 
 var student1 = new Student("Monu",16);
 var student4 = new Student("Karan",14)
 student4.birthday()
 console.log("student 1 age:",student4.age)