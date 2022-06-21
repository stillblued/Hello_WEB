//배열 관련 반복되는 메소드
//forEach : void, 
//          map : [배열] A -> A'  
//          filter : [배열] A -> B
//          reduce : 문자열, Number, [배열], obj{}

let ary = [3, 5, 8, 9, 12]; // 배열객체 :  new Array();
ary.push(5); //pop();
ary.unshift(7); // shift();
ary.splice(3, 1);


let newAry = [];

//1.forEach
let result = ary.forEach(firstCallBack);

function firstCallBack(elem) {
    newAry.push(elem);
}

console.log(newAry);

//2.map A -> A'(A*2)
result = ary.map(elem => elem * 2);

//3.filter A -> a
result = ary.filter((elem, idx, arry) => elem % 2 == 0);

//4.reduce A -> 문자열, Number, [], {}
result = ary.reduce((accum, curr, currIdx, ary) => {
    return accum + curr;
}, 0);


result = ary.reduce((accum, curr) => { // like map 
    console.log(accum, curr);
    accum.push(curr * 2);
    return accum;
}, []);


result = ary.reduce((accum, curr, currIdx) => { // filter, map
    if (currIdx > 3) {
        accum.push(curr * 2);
    }
    return accum;
}, []);
console.clear();
console.log(result);