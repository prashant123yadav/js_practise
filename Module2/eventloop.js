function lateFunc() {
  console.log("this was done asynchronusly");
}
console.log("this is first log");

setTimeout(lateFunc, 5000);

console.log("this is second log");
