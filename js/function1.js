function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(10, 20));
console.log(sum('10', '20')); //+

function minus(v1, v2) {
    return v1 - v2;
}
console.log(minus('20', '10'));

function sumAry(ary) {
    let sum = 0;
    for (let arr of ary) {
        sum += arr;
    }
    return sum;
}

let numAry = [20, 27, 33, 19, 45];
let result = sumAry(numAry);
console.log('배열의 합: ' + result);

numAry.forEach(function () {
    console.log('hi');
});

numAry.forEach(function (num, idx) {
    console.log(num);
});