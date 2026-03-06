const showFiveRandomNumber = () => {
    const randomNumbers = [];
    for (let i = 1; i <= 5; i++) {
        randomNumbers.push(Math.floor(Math.random()*100));
    }
    return randomNumbers;
}

console.log(showFiveRandomNumber());