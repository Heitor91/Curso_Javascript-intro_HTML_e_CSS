const booleano1 = true;
const booleano2 = false;

function andGate(entrada1, entrada2){
    return entrada1 && entrada2;
}
function orGate(entrada1, entrada2){
    return entrada1 || entrada2;
}
function notGate(entrada1){
    return !entrada1;
}
function nandGate(entrada1, entrada2){
    return !(entrada1 && entrada2);
}
function norGate(entrada1, entrada2){
    return !(entrada1 || entrada2);
}
function xorGate(entrada1, entrada2){
    return !entrada1 || !entrada2;
}
function xnorGate(entrada1, entrada2){
    return !(!entrada1 || !entrada2);
}

console.log('porta AND:')
console.log(`${booleano2} AND ${booleano2} -> ${andGate(booleano2, booleano2)}`);
console.log(`${booleano2} AND ${booleano1} -> ${andGate(booleano2, booleano1)}`);
console.log(`${booleano1} AND ${booleano2} -> ${andGate(booleano1, booleano2)}`);
console.log(`${booleano1} AND ${booleano1} -> ${andGate(booleano1, booleano1)}`);
console.log('porta OR:')
console.log(`${booleano2} OR ${booleano2} -> ${orGate(booleano2, booleano2)}`);
console.log(`${booleano2} OR ${booleano1} -> ${orGate(booleano2, booleano1)}`);
console.log(`${booleano1} OR ${booleano2} -> ${orGate(booleano1, booleano2)}`);
console.log(`${booleano1} OR ${booleano1} -> ${orGate(booleano1, booleano1)}`);
console.log('porta NOT:')
console.log(`NOT ${booleano2} -> ${notGate(booleano2)}`);
console.log(`NOT ${booleano1} -> ${notGate(booleano1)}`);
console.log('porta NAND:')
console.log(`${booleano2} NAND ${booleano2} -> ${nandGate(booleano2, booleano2)}`);
console.log(`${booleano2} NAND ${booleano1} -> ${nandGate(booleano2, booleano1)}`);
console.log(`${booleano1} NAND ${booleano2} -> ${nandGate(booleano1, booleano2)}`);
console.log(`${booleano1} NAND ${booleano1} -> ${nandGate(booleano1, booleano1)}`);
console.log('porta NOR:')
console.log(`${booleano2} NOR ${booleano2} -> ${norGate(booleano2, booleano2)}`);
console.log(`${booleano2} NOR ${booleano1} -> ${norGate(booleano2, booleano1)}`);
console.log(`${booleano1} NOR ${booleano2} -> ${norGate(booleano1, booleano2)}`);
console.log(`${booleano1} NOR ${booleano1} -> ${norGate(booleano1, booleano1)}`);
console.log('porta XOR:')
console.log(`${booleano2} XOR ${booleano2} -> ${xorGate(booleano2, booleano2)}`);
console.log(`${booleano2} XOR ${booleano1} -> ${xorGate(booleano2, booleano1)}`);
console.log(`${booleano1} XOR ${booleano2} -> ${xorGate(booleano1, booleano2)}`);
console.log(`${booleano1} XOR ${booleano1} -> ${xorGate(booleano1, booleano1)}`);


