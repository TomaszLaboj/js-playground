const readline = require('readline-sync');

const takeInput = () => {
    const firstName = readline.question('What is your first name?');
    const lastName = readline.question('What is your last name?');
    const age = Number(readline.question('What is your age?'));
    const price = Number(readline.question('What is your price?'));

    return `This is your data:\nFirst name: ${firstName}\nLast name: ${lastName}\nAge: ${age}\nPrice: ${price}`;
}

console.log(takeInput());