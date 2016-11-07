function getTodo() {
    return {
        id: 123,
        title: "Pick up drycleaning",
        completed: false
    };
}

var {id: myId, title, completed} = getTodo();

console.log(myId, title, completed);

function countdown({initial, final: final = 0, interval: interval = 1, initial: current}) {
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}