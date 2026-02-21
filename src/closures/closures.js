let scope = "global scope";

function checkscope() {
    let scope = "local scope";
    function f() { return scope; }
    return f();
}

console.log(checkscope())

function checkscopeAgain() {
    let scope = "local scope";
    function f() { return scope; }
    return f;
}

let s = checkscopeAgain()();

console.log(s);


let uniqueInteger = (function() {
    let counter = 0;
    return function() { return counter++};
}());
console.log(uniqueInteger());
console.log(uniqueInteger());

