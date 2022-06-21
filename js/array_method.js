//some : 조건을 만족하는 요소 하나 true / false 
//every : 조건을 만족하는 요소 모두 true / false
//find : 찾기 
//indexOf : 배열요소 => 인덱스 값 반환

let idx = "This is a story".indexOf("st");
idx = [1, 2, 3, 4, 5].indexOf(8); // 존재하지 않을시 -1 리턴

let str = `All HTML documents must start with a document type declaration.`;
let strAry = str.split(' '); // 공백기준 반환타입 배열
idx = strAry.indexOf('HTML');

console.log(idx);