

function sum(...rest){
    return [...rest].reduce((a,b)=>a+b);
}

exports.sum = sum;