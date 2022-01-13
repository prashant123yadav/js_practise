console.log("this is programming");

process.on("beforeExit", (code) => {
  console.log("process beforeexit event with code:", code);
});

process.on("exit", (code) => {
  setTimeout(() => {
    console.log("this is not work");
  }, 0);
  console.log("process exit event with code:", code);
});
console.log("this is second message");
process.exit()