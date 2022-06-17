let str = 'Hello'; // 문자열 String
let str1 = new String('Hello'); // 문자열 객체 

console.log(str == str1); // 값 비교
console.log(str === str1); // 타입 & 값 비교

let num = new Number(123); // number => object
let num1 = 123; // number;
console.log(num.valueOf() === num1); // 객체 => 기본데이터타입 변환
console.log('123');

//원시 타입: string, number, boolean, undefiend
//객체 타입: 함수, Object({name:?, age:?}), 배열, null

console.log("   Hello   ".trim());
console.log("This is the only story".slice(10, 15));


let str2 = 'This is the only one story';
console.log(str2.substring(8, 11));



//search()

// only, story
let ary = [];
let oby = [];
let reg = /good/; // new RegExp();
let regStr = "BAD MORNING, GOOD AFTERNOON, goodevening, and bad night"
console.log(regStr.replace(/good\s/gi, 'bad '));

//indexOf()
console.log(regStr.indexOf("GOOD"));
console.log(regStr.indexOf("GOOD", 15));
console.log(regStr.lastIndexOf("and"));
console.log(regStr.charAt(24));
console.log(regStr.includes("bad"));