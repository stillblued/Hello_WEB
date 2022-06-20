let names = [];
names.push('이희수');
names.push('인은지');
names.unshift('박소현'); //박소현 이희수 인은지
names.splice(1, 0, '오지민'); //박오이인
names.splice(2, 2, '김가윤', '박경아'); //박오김박

let newNames = [];
names.forEach(function (val, idx) {
    if (idx % 2 == 0) {
        newNames.push(val);
    };
});
console.log(names);

let mapAry = names.map(function (val, idx, ary) {
    if (idx % 2 == 0) {
        return val;
    }
}); //mapping A -> B (undifined 존재)
console.log(mapAry);

let filAry = mapAry.filter(function (val, idx) {
    return val;
}); //조건 만족하는 값들만 새로운 배열요소
console.log(filAry);

//위 두가지 합친 것
let resultAry = names.map((val, idx) => {
    if (idx % 2 == 0) {
        return val;
    }
}).filter((val, idx) => {
    return val;
});
console.log(resultAry);