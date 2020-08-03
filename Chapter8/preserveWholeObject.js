// before
const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if(aPlan.withinRange(low, high)){
    alert('방 온도가 지정 범위를 벗어났습니다.')
}


//after
if(aPlan.withinRange(aRoom.daysTempRange)){
    alert('방 온도가 지정 범위를 벗어났습니다.')
}