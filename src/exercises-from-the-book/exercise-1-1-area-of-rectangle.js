const readline = require('readline-sync');

const takeInput = () => {
	let a = Number(readline.question('Size of side a in cm: '));
	if (Number.isNaN(a)) {
		console.log('Only numbers are allowed');
		return [undefined, undefined];
	}
	let b = Number(readline.question('Size of side b in cm: '));
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
	console.log(`For a rectangle with sides ${a}cm and ${b}cm, the area is: ${areaOfRectangle(a, b)}cm2`);
}



