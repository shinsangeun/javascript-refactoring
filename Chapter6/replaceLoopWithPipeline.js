// before
const names = [];
for(const i of input){
    if(i.job === "programmer")
        names.push(i.name)
}

// after
const names = input.filter(i => i.job === "programmer")
    .map(i=>i.name);


//before
//인도에 자리한 사무실을 찾아서 도시명과 전화번호를 반환
function acquireData(input) {
    const lines = input.split("\n");
    let firstLine = true;
    const result = [];
    for(const line of lines){
        if(firstLine){
            firstLine = false;
            continue;
        }
        if(line.trim() === "") continue;
        const record = line.split(",");
        if(record[1].trim() === "India"){
            result.push({city: record[0].trim(), phone: record[2].trim()});
        }
    }
    return result;
}

// after
function acquireData(input) {
    const lines = input.split("\n");
    return lines
        .splice(1)
        .filter(line => line.trim() !== "")
        .map(line => line.split(","))
        .filter(fields => fields[1].trim() === "India")
        .map(fields => ({city: fields[0].trim(), phone: fields[2].trim()}))
}