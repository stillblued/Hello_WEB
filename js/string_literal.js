let srt = 'Hello'; // "Hello";
str = `Hello`; // 문자열 표현

let person = {
    name: "hong",
    age: 20,
    showInfo: function () {
        // return '이름은 ' + this.name + ', 나이는 ' + this.age;
        return `이름은 ${this.name}, 나이는 ${this.age}`;
    }
}

console.log(person.showInfo());
console.log(`${person.age >= 20 ? '성인' : '청소년'}`);

let strings = 'This\nis\na\nboy';
strings = `This
is
a
boy`;
console.log(strings);

"This is an apple".indexOf('apple');
"This is an apple".charAt(10);

let ssn = '950101-1234567';

function checkGender(num) {
    let genNum = num.replace('-', '');
    switch (genNum.charAt(6   )) {
        case '1':
        case '3':
            return '남자';
        case '2':
        case '4':
            return '여자';
    }
}

let result = checkGender(ssn);
console.log(result);