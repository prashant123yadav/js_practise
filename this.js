var createStudent = function(name, age) {
    var student = {
     name: name,
     age: age,
     birthday:function(){
      this.age++;
     }
    }
    return student;
}

var student1 = createStudent("Raju" ,23);
var student2 = createStudent("Sonu",21); 
var student3 = createStudent("abhishek",22)
student1.birthday();
console.log(student1.age +student2.name);