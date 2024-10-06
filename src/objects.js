const firstObject = { x: 5, y: 10 };
const secondObject = new Object({ x: 5, y: 10 });
const thirdObject = Object.create({ a: 12, b: 23 });
const a = Object.create(null);
console.log(typeof firstObject.x.toString());
console.log(thirdObject.a.toString());

a.x = 23;
console.log(a.x.toString());

let o = {};
o.x = 1;
let p = Object.create(o);
p.y = 2;
let q = Object.create(p);
