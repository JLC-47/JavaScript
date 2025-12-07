function operar(a, b, callback){
    return callback(a, b);
}


function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

function multiplicar(a,b){
    return a*b;
}
console.log(operar(10, 6, sumar));
console.log(operar(10, 6, restar));
console.log(operar(10, 6, multiplicar));



