var createStudent = function(name, age) {
    var student = {
     name: name,
     age: age
    }
    return student;
}

var student1 = createStudent("Raju" ,23);
var student2 = craeteStudent("Sonu",21);

console.log("students:",student1.name,student2.name);