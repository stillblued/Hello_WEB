let data = `[{"id":1,"first_name":"Whit","last_name":"Agge","email":"wagge0@vkontakte.ru","gender":"Male","salary":2563},
{"id":2,"first_name":"Godfry","last_name":"Corona","email":"gcorona1@xinhuanet.com","gender":"Male","salary":4292},
{"id":3,"first_name":"Minnie","last_name":"Brunsden","email":"mbrunsden2@paginegialle.it","gender":"Non-binary","salary":2625},
{"id":4,"first_name":"Kellby","last_name":"Borland","email":"kborland3@uiuc.edu","gender":"Male","salary":2005},
{"id":5,"first_name":"Reinaldos","last_name":"Hurndall","email":"rhurndall4@senate.gov","gender":"Male","salary":4650},
{"id":6,"first_name":"Kienan","last_name":"Haps","email":"khaps5@meetup.com","gender":"Male","salary":2931},
{"id":7,"first_name":"Maureene","last_name":"Jupp","email":"mjupp6@over-blog.com","gender":"Female","salary":3826},
{"id":8,"first_name":"Enrico","last_name":"Braundt","email":"ebraundt7@123-reg.co.uk","gender":"Male","salary":2404},
{"id":9,"first_name":"Tann","last_name":"Dmitrichenko","email":"tdmitrichenko8@jimdo.com","gender":"Male","salary":3193},
{"id":10,"first_name":"Darryl","last_name":"Ingall","email":"dingall9@statcounter.com","gender":"Male","salary":2126},
{"id":11,"first_name":"Veronike","last_name":"Negal","email":"vnegala@about.me","gender":"Female","salary":4631},
{"id":12,"first_name":"Rosalynd","last_name":"Fredi","email":"rfredib@studiopress.com","gender":"Female","salary":3825},
{"id":13,"first_name":"Thea","last_name":"Howsden","email":"thowsdenc@barnesandnoble.com","gender":"Female","salary":1547},
{"id":14,"first_name":"Katharina","last_name":"Garrand","email":"kgarrandd@sourceforge.net","gender":"Female","salary":4839},
{"id":15,"first_name":"Michelina","last_name":"Leere","email":"mleeree@tmall.com","gender":"Female","salary":4284}]`;

let objAry = JSON.parse(data); // JSON.parse() : 문자열 => 오브젝트.
console.log(data);
console.log(objAry);
console.clear();

let over3000 = objAry.filter(val => {
    return val.salary >= 3000;
}).map(val => {
    let obj = {}; //A -> B
    obj.name = `${val.last_name}, ${val.first_name}`;
    obj.salary = val.salary;
    return obj;
});
console.log(over3000);


//female 평균값 기능 구현
let avg = 0;
let num = 0;
let sum = 0;
objAry.filter(val => val.gender == 'Female')
    .forEach(val => {
        sum += val.salary;
        num++;
    });
avg = Math.floor(sum / num);
console.log(`여사원의 급여평균 ${avg}`);


// 급여
let salaries = [];
salaries = objAry.map(val => val.salary);
console.log(salaries);