// Code your solutions in this file
function writeCards(names, adjective) {
    var msgArray = [];
    for(let i = 0; i < names.length; i++){
        msgArray[i] = `Thank you, ${names[i]}, for the wonderful ${adjective} gift!`;
    }
    return msgArray;
}

function countDown(numCount) {
    while(numCount >= 0) {
        console.log(numCount);
        numCount--;
    }
}