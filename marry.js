var createStudent = function(name, age) {
    var student = {
      name: name, 
      age: age
    }
    return student;
  }
  
  var student1 = createStudent("Mary", 10);
  var student2 = createStudent("Michael", 12);
  
  console.log("Students:", student1.name, student2.name);