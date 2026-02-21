function counter() {
    let n = 0;
    return {
        count: function() { return n++ ; },
        reset: function() { return n = 0; }
    };
}

let c = counter(), d = counter(); //create two counters

console.log(c.count()); // => 0
console.log(d.count()); // => 0: they count independently
console.log(c.reset()); // reset() and count() methods share state
console.log(c.count()); // => 0: because we reset c
console.log(d.count()); // => 1: d was not reset
console.log(d.count()); // => 2

