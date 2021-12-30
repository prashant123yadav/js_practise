const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(Error("this is our time "));
  }, 2000);
});
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error();
    err;
  });
