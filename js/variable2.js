let ary = new Array();
ary[0] = 10;

ary = [20, 30, 15, 27];
ary[ary.length] = 50;
ary[ary.length] = 60;
ary[ary.length] = 65;
ary[10] = 100;

console.log(ary);

for (let i = 0; i < ary.length; i++) {
    console.log(i + '번째' + ary[i])
}

ary = ['사과', '바나나', '고구마', '수박'];

console.clear(); //로그지우기

document.write('<ul>');
for (let val of ary) {
    console.log(val);
    document.write('<li>' + val + '</li>');
}
document.write('</ul>');

ary = [{
        name: '홍길동',
        age: 20,
        phone: '010-1234-5678'
    },
    {
        name: '김길동',
        age: 40,
        phone: '010-3124-5678'
    },
    {
        name: '이길동',
        age: 60,
        phone: '010-5467-5678'
    },
    {
        name: '박길동',
        age: 80,
        phone: '010-8797-5678'
    }
]

document.write('<ul>');
for (let person of ary) {
    document.write('<li>' + person.name + '</li>');

}
document.write('</ul>');

let str = '';
str += '<ul>';
for (let person of ary) {
    str += '<li>이름:' + person['name'] + '</li>';
}
str += '</ul>';


str = '<table border=1>';
for (let person of ary) {
    str += '<tr><td>' + person['name'] + '</td><td>' + person['age'] + '</td></tr>'
}
str += '</table>';

console.log(str);
document.write(str);



const v1 = 'hello'; //상수 변수 
// v1 ='new'; 오류

let n1 = 10;
let n2 = n1;
n1 = 20;
console.log(n1, n2);


let o1 = {
    name: 'one'
};
let o2 = o1; //참조타입 : o1, o2 누구를 바꿔도 둘다 바뀜
o2.name = 'two';
o1.name = 'three';
console.log(o1, o2);


const obj = {
    sno: '22-12345',
    sname: 'Hong'
}
obj.sno = '22-2222'; //상수 변수 새롭게 선언한 것이 아닌 참조 속성 값을 변경


//var  let 변수 선언
//var  변수선언 : 변수의 scope -> 전역변수/지역변수
var var1 = 'Hello';

function localFnc() {
    var var2 = 'nice'; //지역변수
    console.log(var2);
}
localFnc();
//console.log(var2);
console.log(var1);

console.log(l1);

var l1 = 'hello';
var l1 = 'hello';

var num;
for (num of ary) {
    console.log(num);
}
console.log(num);