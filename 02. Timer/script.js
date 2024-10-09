let timeInput=document.getElementById("timeInput");
let startBtn=document.getElementById("startBtn");
let countDown=document.getElementById("countDown");
startBtn.addEventListener("click", count);
let countdown;
function count(){
    let seconds=parseInt(timeInput.value);
    if(isNaN(seconds)||seconds<=0){
        alert("Please enter a valid number of seconds");
        return;
    }
    countDown.textContent=formatTime(seconds);
    countdown=setInterval(function(){
        seconds--;
        if(seconds<0){
            clearInterval(countdown);
            alert("Times up!");
        }else{countDown.textContent=formatTime(seconds)}
    },1000)
    timeInput.value="";
}
function formatTime(second){
    const mins=Math.floor(second/60);
    const sec=second%60;
    const formatmins=mins<10?`0${mins}`: mins;
    const formatsecs=sec<10?`0${sec}`: sec;
    
    return `${formatmins}:${formatsecs}`
}