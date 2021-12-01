var student = {
    name: "Mary", 
    age: 10, 
    grades: [90, 88, 95]
  }
  
  for(property in student) {
    console.log(student[property]);
  }