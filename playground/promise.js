const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("arguments must be numbers");
      }
    }, 1500);
  })
};

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("Hey. It worked!");
//     reject("Unable to fulfil promise");
//   }, 2500)

// });

// somePromise.then((message) => {
//   console.log("success: ", message)
// }, (errorMessage) => {
//   console.log("error: ", errorMessage);
// });

asyncAdd(12, "1").then((res) => {
  console.log("Result: ", res);
  return asyncAdd(res, 11);
}, (errorMessage) => {
  console.log(errorMessage);
}).then((res) => {
  console.log("should be bah", res)
}).catch((errorMessage) => {
  console.log(errorMessage);
});