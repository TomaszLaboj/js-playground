function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if (location === "Google") {
            resolve("Google says hi")
        } else {
            reject("I can only talk to Google")
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log("Processing response")
        resolve(`Extra information: ${response}`)

    })
}

// makeRequest("Google").then((response) => {
//     return processRequest(response)
// }).then((processedResponse) =>
//     console.log(processedResponse)
// ).catch((err) => console.log(err))

async function doWork() {
    try {
        const response = await makeRequest("facebook");
        console.log(response);
        const processedRequest = await processRequest(response);
        console.log(processedRequest);
    } catch(error) {
        console.log('in catch block', error)
    }
}
doWork();