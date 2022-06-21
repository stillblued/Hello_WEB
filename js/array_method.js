//some : 조건을 만족하는 요소 하나 true / false 
//every : 조건을 만족하는 요소 모두 true / false
//find : 조건 만족하는 첫번째 값, findIndex : 인덱스 리턴
//indexOf : 배열요소 => 인덱스 값 반환
//split 구분자 : 문자열 => 배열
//join 구분자 : 배열 => 문자열

let idx = "This is a story".indexOf("st");
idx = [1, 2, 3, 4, 5].indexOf(8); // 존재하지 않을시 -1 리턴

let str = `All HTML documents must start with a document type declaration.`;
let strAry = str.split(' '); // 공백기준 반환타입 배열
idx = strAry.lastIndexOf('HTML');
console.log(idx);

strAry = 'Littering'.split(''); // 문자 하나하나
let cnt = 0;
strAry.forEach(elem => {
    elem == 't' ? cnt++ : cnt;
});

result = ['홍길동', '백민규', '김상우'].join('-');

cnt = strAry.reduce((accum, curr) => {
    accum += curr == 't' ? 1 : 0;
    return accum;
}, 0);
console.log(cnt);

let result = [6, 4, 2, 21, 14].find(function (elem, idx, ary) {
    return elem % 7 == 0;
});

result = [6, 4, 2, 21, 14].some(function (elem, idx, ary) {
    return elem > 20;
});

result = [6, 4, 2, 21, 14].every(function (elem, idx, ary) {
    return elem % 2 == 0;
});
console.log(result);

let tempAry = [];
for (let i = 0; i < 5; i++) {
    let temp = parseInt(Math.random() * 10) + 1; // 1~10 까지의 임의 수 
    tempAry.push(temp);
};

console.log(tempAry);

//sort 정렬 reverse 역순정렬

result = [6, 4, 3, 21, 14].sort(function (a, b) {
    return a - b; //오름차순
    //return b - a; //내림차순
    // a > b ? 1 : -1 ;
    //sort((next, prev) => prev - next) / 무언가 바꾸고 싶을 때 -1을 리턴하는 것
});

let objAry = [{
        name: "홍길동",
        age: 18
    },
    {
        name: "김민수",
        age: 20
    },
    {
        name: "박세민",
        age: 19
    }
];

result = objAry.sort(function (a, b) {
    // if (a.name < b.name) {
    //     return -1;
    // } else {
    //     return 1;
    // }
    return a.name < b.name ? -1 : 1;
});


let names = '권소정, 김하은, 유선희, 김가윤';
result = names.split(', ');
names = result.sort(function (a, b) {
    return a < b ? -1 : 1;
});
result = names.join(', ');

console.clear();
console.log(result);