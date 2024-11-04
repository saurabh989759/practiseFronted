async function handlePromise() {
    console.log("Hello World!!");

    const val1 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 1 Resolved Value!!");
        }, 10000); // 10-second delay
    });
    console.log("Namaste JavaScript");
    console.log(val1);

    const val2 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 2 Resolved Value!!");
        }, 5000); // 5-second delay
    });
    console.log("Namaste JavaScript 2");
    console.log(val2);
}

handlePromise();
