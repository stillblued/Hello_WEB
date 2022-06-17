//객체 생성

function Student(sno, sname, age) { //생성자함수 대문자
    this.sno = sno; // this => window
    this.sname = sname;
    this.age = age;
}

let s1 = new Student('22-1111', '홍길동', 19);
let s2 = s1;
s2.sno = '22-2222';
console.log(s1);

function Table(param) {
    this.data = param;
    this.tag = '';
    this.fields = ['sname', 'age', 'height', 'weight'];

    this.createTable = function () {
        this.tag += '<table border=1>';
        this.tag += this.createHead();
        this.tag += this.createBody();
        this.tag += '</table>';
        return this.tag;
    }
    this.createHead = function () {
        let str = '<thead><tr>';
        this.fields.forEach(elem => {
            str += '<th>' + elem + '</th>';
        });
        str += '</tr></thead>';
        return str;
    }
    this.createBody = function () {
        let str = '<tbody>';
        this.data.forEach(elem => {
            str += '<tr>';
            for (let val in elem) {
                str += '<td>' + elem[val] + '</td>';
            }
            str += '</tr>';
        });
        str += '</tbody>';
        return str;
    }
}

//function(){ this -> window}
// new 함수 => this : 객체 
// 이벤트 => this : 이벤트 대상 

let data = [{
        sname: '홍길동',
        age: 15,
        height: 167.8,
        weight: 65.5
    },
    {
        sname: '이찬희',
        age: 20,
        height: 175.5,
        weight: 72.4
    },
    {
        sname: '김민수',
        age: 22,
        height: 182.5,
        weight: 73
    }
]

let t1 = new Table(data);
let str = t1.createTable();
document.write(str);