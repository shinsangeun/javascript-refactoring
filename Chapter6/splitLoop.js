// before
// 전체 급여와 가장 어린나이를 계산하는 코드
let youngest = people[0] ? people[0].age : Infinity;
let averageAge = 0;
let totalSalary = 0;
for(const p of people){
    averageAge += p.age;
    totalSalary += p.salary;
}
averageAge = averageAge / people.length;

return '최연소: ${youngest}, 총 급여: ${totalSalary}'

//after
let totalSalary = 0;
for(const p of people){
    totalSalary += p.salary;
}

let averageAge = 0;
for(const p of people){
    averageAge += p.age;
}

averageAge = averageAge / people.length;

return '최연소: ${youngestAge()}, 총 급여: ${totalSalary()}';

function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
}

function youngestAge() {
    return Math.min(...people.map(p => p.age));
}