
// here the promise is outside so it is already registerd in the javascript and its clock is ticking 
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved Value!!");
    }, 10000); // 10-second delay
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved Value!!");
    }, 5000); // 0.5-second delay
});

// `await` can only be used inside an async function
async function handlePromise() {
    console.log("Hello World!!");

    // Wait for the first promise to resolve
    const val1 = await p1;
    console.log("Namaste JavaScript");
    console.log(val1);

    // Wait for the second promise to resolve
    const val2 = await p2;
    console.log("Namaste JavaScript 2");
    console.log(val2);
}

handlePromise();
