function sumAry(ary) {
    let result = 0;
    for (let i = 0; i < ary.length; i++) {
        result += ary[i];
    }
    return result;
}
//const sumAry = function(ary){...} =>함수정의문 =>함수표현식처리


let args = [1, 2, 3, 4, 5];
console.log(sumAry(args));

let arrNum = [1, 2, 3];
console.log(sumAry(arrNum));


//함수 표현식
const sum = function (num1, num2) {
    if (!num1) { //undefined -> false 의미 (null, 0, '')
        num1 = 0;
    }
    num2 = num2 == undefined ? 0 : num2; // 삼항연산자
    return num1 + num2;
}
console.log(sum(10));

const sum2 = sum;
console.log(sum2);


//함수 표현식
const sayHello = name => 'Hello ' + name; //화살표함수
//메소드의 매개값 (콜백함수)
console.log(sayHello('홍길동'));

let arr = ['홍길동', '김민수', '최민식'];
arr.forEach(function (val) {
    console.log(sayHello(val));
});

arr.forEach((val) => console.log(sayHello(val)));

arrNum = [29, 34, 12, 55, 29, 42];
//배열 짝수 값만 더하는 sumEven(args), 홀수번째 요소의 합 sumOdd(args)

console.log(sumEven(arrNum));
console.log(sumOdd(arrNum));

function sumEven(arr) {
    let even = 0;
    arr.forEach((val) => {
        if (val % 2 == 0) {
            even += val;
        };
    });
    return even;
};

function sumOdd(arr) {
    let odd = 0;
    arr.forEach((val, idx) => {
        if (idx % 2 == 0) {
            odd += val;
        };
    });
    return odd;
};