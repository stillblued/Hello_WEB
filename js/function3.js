function sumNumber() {
    console.log(arguments); //함수가 호출되면 arguments객체.
    let result = 0;
    for (let i = 0; arguments.length; i++) {
        result += arguments[i];
    };
    return result;
};

//sumNumber(1, 2, 3, 4, 5);
// sumNumber(1, 2, 3, 4, 5, 6, 7, 8);

// 나머지 파라메터
function sumParam(...args) { // 갯수가 가변적으로 ...처리 배열
    let result = 0;
    args.forEach((val, idx) => {
        result += val;
    }); // callback 함수
    return result;
};

console.log(sumParam(1, 2, 3, 4, 5, 6));

// 커링함수
function orderSet(burger, beverage) {
    console.log('버거: ' + burger + ', 음료: ' + beverage);
}
orderSet('치즈버거', '콜라');

function orderSet_curring(burger) {
    return function (beverage) {
        console.log('버거: ' + burger + ', 음료: ' + beverage);
    }
}

let beverageFnc = orderSet_curring('치즈버거');
beverageFnc('사이다'); // () 함수실행
beverageFnc('환타'); // () 함수실행
// console.log(orderSet_curring('치즈버거')('콜라'));


let args = [1, 3, 5];

function anyFnc(...args) {

}

let another = [4, 5, 6];
let otherArgs = [-1, ...args, -2]; // 두 배열요소를 합쳐서 새로운 배열.
console.log(args.concat(another));

let obj1 = {
    name: 'Hong',
    age: 20,
    weight: 64.7
}
let newObj = {
    name: 'Choi',
    age: 15,
    height: 165.5
};
let obj3 = {
    sno: '12345'
}
let obj2 = {
    ...newObj,
    ...obj1,
    ...obj3
}; // new Object();
console.log(obj1, obj2);

let comObj = {
    sno: '22-010101',
    sname: 'Hong',
    score: 80,
    hobby: ['reading', 'eating'],
    pet: [{
        cname: '야옹이',
        age: 2
    }, {
        dname: '멍멍이',
        age: 3
    }]
}

comObj.sname; // 이름.
comObj.hobby[0]; // reading.
comObj.pet[0].age; // 2
console.log(comObj.pet[1].dname);

var a = 1;
var b = 5;

function outerFunc() {
    function innerFunc() {
        a = b;
    }
    console.log(a);
    a = 3;
    b = 4;
    innerFunc();
    console.log(a);
    var b = 2;
}
outerFunc();
