let data = [{
        sname: 'Hong',
        age: 15,
        height: 167.8,
        weight: 65.5
    },
    {
        sname: 'Hwang',
        age: 20,
        height: 175.5,
        weight: 72.4
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

console.log('HongKildong'.length); //1

let table = new Table(data);
let str = table.createTable(); // => 표형식으로 화면출력
document.write(str);

let names = ['Hong', 'Hwang', 'Kim', 'Park'];
names.push('Choi');
let searchName = names.find(function (val) {
    //return val == 'Hwang'; // true => 반환
    return val.length == 4; // 처음만난 length 4
});

console.log(searchName);

class Estimate {
    constructor(param) {
        this.unit = param;
    }

    getEstimate(unittype, width, height) {
        let priceinfo = this.unit.find(item => item.type == unittype);
        return priceinfo.price * width * height;
    }

    addUnit(unit) {
        this.unit.push(unit);
    }
}

let unitInfo = [{
    type: "wood",
    price: 100
}, {
    type: "iron",
    price: 300
}, {
    type: "plastic",
    price: 200
}];
const estimator = new Estimate(unitInfo);
estimator.addUnit({
    type: 'glass',
    price: 500
});
let result1 = estimator.getEstimate('wood', 20, 20);
console.log(result1);


//object 타입으로 기능

let obj = {
    // unit: unitInfom
    // getEstimate: function(){},
    // addUnit: function(){}
};

obj.unit = unitInfo;
obj.getEstimate = function (unitType, width, height) {
    let priceInfo = this.unit.find(item => item.type == unitType);
    return priceInfo.price * width * height;
}
obj.addUnit = function (unit) {
    this.unit.push(unit);
}
let result2 = obj.getEstimate('wood', 20, 20);
console.log(result2);