function higherOrderFunction(fn,a,b) {
    return fn(a,b);
}

function add(a, b) {
    console.log('Sum: ' + Number(a + b));
}

function subtract(a, b) {
    console.log('Difference: ' + Number(a - b));
}   

higherOrderFunction(add,10,7);