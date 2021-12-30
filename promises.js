const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("the value is get from the promises");
}, 2000);
})
myPromise.then((data) => {
  console.log(data);
});
