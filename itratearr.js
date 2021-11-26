var student=[["raju","male",12],["sonu","male",22],["monu","male",45],["bipin","male",42]]
//console.log(student)
//var printstudent=function(student){
    for(var i=0;i<student.length;i++){
    //console.log(student[i][1]);
    console.log("student"+i+ ":");
  // console.log(student[i][0]);
  // console.log(student[i][1]);
  for(var j=0 ; j<student[i].length ; j++){
      console.log(student[i][j]);
  }
}

