// variable.js

console.log('Hello World!!');
document.write('<h3>Hello World!!</h3>');

let num = 0;
num = 'Hello';
num = 10;
num = 'ten';
num = true;
num = null; // object => class의 instance
let num1; // undefined

console.log(typeof num);
console.log(typeof num1);

num1 = 100;
num2 = 200; // 변수의 선언 없이 사용 : 전역객체 (window)의 속성
console.log(num1 + num2);
//console.log(window);
//window.alert('안녕하세요');

let student = new Object();
student.sno = '22-0123';
student.sname = '홍길동';
student.engScore = 90;
student.mathScore = 80;

console.log(student);
let person = {
    fname: '김민수',
    age: 20,
    height: 175.5,
    showInfo: function () {
        return this.fname + ', ' + this.age + ', ' + this.height
    }
};

person.weight = '65,8';

console.log(person.fname);
console.log(person.showInfo());
console.log(person['age']);
let field = 'height';
console.log(person[field]);

//전체 필드를 for loop .. in
//debugger;
for (let field in person) {
    console.log(field, ' => ', person[field]);
};
console.log(field);
let x = 10
let y = 20

let me = {
    name: '윤정은',
    hobby: '게임',
    tel: '010-2635-1234',
    introduce: function () {
        return this.name + this.hobby + this.tel
    }
};

console.log(me.introduce());