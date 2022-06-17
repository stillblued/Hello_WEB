//테이블 생성함수 
function createTable(aryData) {
    let fields = ['sname', 'age', 'height', 'weight'];
    let tag = '<table border =1>';

    let head = createHead(fields);
    tag += head;

    let body = createBody(aryData);
    tag += body;
    tag += '</table>';
    return tag;
}

//헤더부분 함수
function createHead(fields) {
    let tag = '<thead><tr>';
    for (let idx in fields) {
        tag += '<th>' + fields[idx] + '</th>';
    }
    tag += '</tr></thead>';
    return tag;
};

//바디부분 함수
function createBody(aryData) {
    let tag = '<tbody>';
    aryData.forEach(elem => {
        tag += '<tr>';
        for (let val in elem) {
            tag += '<td>' + elem[val] + '</td>';
        }
        tag += '</tr>';
    });
    tag += '</tbody>';
    return tag;
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

let str = createTable(data);
document.write(str);