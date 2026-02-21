const readline = require('readline-sync');

const takeInput = () => {
	let a = Number(readline.question('Size of side a: '));
	if (Number.isNaN(a)) {
		console.log('Only numbers are allowed');
		return [undefined, undefined];
	}
	let b = Number(readline.question('Size of side b: '));
	if (Number.isNaN(b)) {
		console.log('Only numbers are allowed');
		return [undefined, undefined];

	}
	return [a, b];
}
const [a, b] = takeInput();

const areaOfRectangle = (a, b) => {
	return a * b;		
};

if (!Number.isNaN(a) || !Number.isNaN(b)) {
	console.log(areaOfRectangle(a, b));
}



