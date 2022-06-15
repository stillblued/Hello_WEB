function sum(number1, number2) {
    let result = number1 + number2;
    console.log(result); //undefined
    return result;
}

document.write(sum(10, 20));

function makeTd(val) {
    return '<td>' + val + '</td>';
}

function makeTr(val) {
    return '<tr>' + val + '</tr>';
}

let values = ['Hong', 'Hwang', 'Choi'];
let str = '<table border =1>';
for (let val of values) {
    let td = makeTd(val);
    str += makeTr(td);
};
str += '</table>';
document.write(str);