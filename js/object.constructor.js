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
        this.createHead();
        this.createBody();
        this.tag += '</table>';
        return this.tag;
    }
    this.createHead = function () {
        this.tag += '<thead><tr>';
        this.fields.forEach(elem => {
            this.tag += '<th>' + elem + '</th>';
        });
        this.tag += '</tr></thead>';
    }
    this.createBody = function () {
        this.tag += '<tbody>';
        this.data.forEach(elem => {
            this.tag += '<tr>';
            for (let val in elem) {
                this.tag += '<td>' + elem[val] + '</td>';
            }
            this.tag += '</tr>';
        });
        this.tag += '</tbody>';

    }
}


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