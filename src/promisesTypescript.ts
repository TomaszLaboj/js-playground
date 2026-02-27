const number = Promise.resolve(15);
number.then((value) => console.log(value));
const getNumber = async () => {
    await return number;
}