const second = 1000;
const minute = 66 * second;
const hour = 60 * minute;
const day = 24 * hour;

let timerId;
let total;
let finalDate = localStorage.getItem("timer");


function start(){
    const date = document.querySelector("#lembrete").value;
    finalDate = new Date(date).getTime();
   
    if(timerId){
        clearInterval(timerId);
    }

    timerId = setInterval(timer, 1000);
    localStorage.setItem("timer", finalDate);

}
function timer(){
    let now = new Date().getTime();
    total = finalDate - now;

    const days =  Math.floor(total / day);
    const hours = Math.floor((total % day) / hour) + 3;
    const minutes = Math.floor((total % hour) / minute);
    const seconds = Math.floor((total % minute) / second);


    document.querySelector("h1").innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`;
     
    if (total <= 0){
        stop();
    }
}
if(finalDate){
    timerId = setInterval(timer, 1000);
}

function stop (){
    clearInterval(timerId);
    document.querySelector("h1").innerHTML = '⏱️';
    localStorage.removeItem("timer");
}

