let num = 2;
let str = '';

str = '<table border=1>';
for (let i = 1; i <= 9; i++) {
    str += '<tr><td>' + num + '</td><td>*</td><td>' + i + '</td><td>=</td><td>' + (num * i) + '</td></tr>'
};
str += '</table>';


//


showCal2022(6);

function showCal2022(mon) {
    let days = ['일', '월', '화', '수', '목', '금', '토'];
    str = '';
    str = '<table border=1><tr><caption>2022년 ' + mon + '월 달력</caption>';
    for (let day of days) {
        str += '<th>' + day + '</th>';
    }
    str += '</tr><tr>';
    let vtd = getFirstDay(mon);
    for (let i = 1; i < vtd; i++) {
        str += '<td></td>'
    }
    for (let i = 1; i <= getLastDay(mon); i++) {
        str += '<td>' + i + '</td>'
        if ((vtd - 1 + i) % 7 == 0) {
            str += '</tr><tr>'
        }
    }
    str += '</tr></table>';
    document.write(str);
};


function getFirstDay(mon) {
    switch (mon) {
        case 1:
        case 10:
            return 7;
        case 2:
        case 3:
        case 11:
            return 3;
        case 4:
        case 7:
            return 6;
        case 5:
            return 1;
        case 6:
            return 4;
        case 8:
            return 2;
        case 9:
        case 12:
            return 5;
    }
}

function getLastDay(mon) {
    switch (mon) {
        case 2:
            return 28;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        default:
            return 31;
    }
}