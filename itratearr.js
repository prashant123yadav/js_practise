var student = [
  ["raju", "male", 12],
  ["sonu", "male", 22],
  ["monu", "male", 45],
  ["bipin", "male", 42],
];
var printstudent = function(student){
  for(var i = 0; i <student.length; i++){
    console.log("Student " + i + ":");
    console.log(student[i][0]);
    console.log(student[i][1]);
  }
}
printstudent(student);