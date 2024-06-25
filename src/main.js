let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("Success")
    } else {
        reject("Failed")
    }
});
p.then((message) => {
    console.log("In then block " + message)
}).catch((message) => {
    console.log("In catch block " + message)
});
