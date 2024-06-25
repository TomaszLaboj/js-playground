const outsideTemperature = 30;

function temperatureCheckPromise () {
    return new Promise((resolve, reject) => {
        if(outsideTemperature < 35) {
            resolve({
                name: "it's nice",
                message: "you can go outside"
            })
        } else {
            reject({
                name: "it's too hot",
                message: "stay inside"
            })
        }
    })
}


const caller = () => {

    temperatureCheckPromise().then((message) => {
            console.log("Success: " + message.name + message.message)
        }).catch((error) => {
            console.log(error.name + " " + error.message)
        }
    );
    console.log('this will be executed first and then the promise')

}
caller();