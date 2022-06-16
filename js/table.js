let data = [{
        sname: 'Hong',
        age: 15
    },
    {
        sname: 'Hwang',
        age: 20
    }
]

class Table {
    //생성자
    constructor(ary) {
        this.aryData = ary;
    }
    //메소드
    createTable() {
        this.tag = '<table border=1>';
        //헤더정보 <thead>...</thead>
        for (let field in this.aryData[0]) { //{sname:'Hong', ...}
            this.tag += '<th>' + field + '</th>';
        };
        this.tag += '</tr>';
        //바디정보 <tbody>...</tbody>
        this.aryData.forEach((val, idx) => {
            this.tag += '<tr>';
            for (let field in val) {
                this.tag += '<td>' + val[field] + '</td>';
            }
            this.tag += '</tr>';
        });
        this.tag += '</table>';
        return this.tag;
    }
}

let table = new Table(data);
let str = table.createTable(); // => 표형식으로 화면출력
console.log(str);
document.write(str);