const race = "100m dash";
const runners = ["vikash" , "vishal" , "virat"];
const results = runners.map((runner,i) => ({ name: runner , race , place:i+1}));
console.log(results);
