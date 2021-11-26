var student=[
["aatish",10],
["avika",11],
["amit",12],
];
console.log(student);
console.log(student[0]);
console.log(student[2][1]);
student[2].push(10);
console.log(student);
student[1].push([3,4]);
console.log(student);
student[0].unshift([5,5]);
console.log(student);
student[1].shift();
console.log(student);