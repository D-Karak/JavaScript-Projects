let timeInput=document.getElementById("timeInput");
let startBtn=document.getElementById("startBtn");
let countDownDisplay=document.getElementById("countDown");
startBtn.addEventListener("click", count);
startBtn.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        count();
    }
});

let countdown;
function count(){
    let seconds=timeInput.value;
    if(isNaN(seconds)||seconds<=0){
        alert("Please enter a valid number of seconds");
        return;
    }
    countDownDisplay.textContent=formatTime(seconds);
    countdown=setInterval(function(){
        seconds--;
        if(seconds<0){
            clearInterval(countdown);
            alert("Times up!");
        }else{countDownDisplay.textContent=formatTime(seconds)}
    },1000)
    timeInput.value="";
}
function formatTime(totalsecond){
    const mins=Math.floor(totalsecond/60);
    const sec=totalsecond%60;
    const formatmins=mins<10?`0${mins}`: mins;//let formatmins; if (mins < 10) { formatmins = "0"+mins;} else { formatmins = mins;}

    const formatsecs=sec<10?`0${sec}`: sec;
    
    return `${formatmins}:${formatsecs}`
}