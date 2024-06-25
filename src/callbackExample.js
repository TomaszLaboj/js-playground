const outsideTemperature = 30;

function temperatureCheck (callback, errorCallback) {
    if(outsideTemperature < 35) {
        callback({
            name: "it's nice",
            message: "you can go outside"
        })
    } else {
        errorCallback({
            name: "it's too hot",
            message: "stay inside"
        })
    }

}

temperatureCheck((message) => {
        console.log("Success: " + message.name + message.message)
    }, (error) => {
        console.log(error.name + " " + error.message)
    }
)