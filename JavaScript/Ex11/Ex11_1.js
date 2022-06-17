function max(x, y){
    if(x>y){
        return x;
    }else{
        return y;
    }
}
function max2(x, y){
    if(x>y) return x;
    return y;
}
function max3(x, y){
    return x > y ? x : y;
}
const max4 = (x, y) => x > y ? x : y

console.log(max(20,50));
console.log(max(200,50));
console.log(max2(10,60));
console.log(max2(80,50));
console.log(max3(10,60));
console.log(max3(80,50));
console.log(max4(10,60));
console.log(max4(80,50));
