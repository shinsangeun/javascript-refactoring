// before
...
let found = false;
for(const p of people){
    if(!fount){
        if(p === "조커"){
            sendAlert();
            found = true;
        }
        if(p === "사루만"){
            sendAlert();
            found = true;
        }
    }
}
...

//after
function checkForMiscreants(people) {
    for(const p of people){
        if(p === "조커"){
            sendAlert();
            return;
        }
        if(p === "사루만"){
            sendAlert();
            return;
        }
    }
}

function checkForMiscreants(people) {
    if(people.some(p => ["조커", "사루만"].includes(p))) sendAlert();
}