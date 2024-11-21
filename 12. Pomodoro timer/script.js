
const visualCountdown=document.getElementById("visual-countdown");
const animationProgress=document.getElementById("animation-progress");
const alertSound=document.getElementById("alert-sound")
const tickingSound=document.getElementById("ticking-sound")
const longBreak=document.getElementById("long-break-field")
const shortBreak=document.getElementById("short-break-field")
const selectBreak = document.getElementById("select-break");
const startBtn = document.getElementById("start-timer");
const sessionCount=document.getElementById("session-count")


let countdown;
let session = localStorage.getItem("session")||0;
let time=shortBreak.value;

if(localStorage.getItem("session")){
    sessionCount.innerHTML=localStorage.getItem("session");
}
// default appearence
selectBreak.textContent="SHORT BREAK";
longBreak.style.opacity="0.5"
longBreak.setAttribute("readonly", true);
shortBreak.style.opacity = "1";
shortBreak.removeAttribute("readonly");

// updating the visual countdown as soon as input values are change
function visualShortBreakTime(){
visualCountdown.textContent = formatTime(shortBreak.value * 60);
 time = shortBreak.value; 
}
function visualLongBreakTime(){
visualCountdown.textContent = formatTime(longBreak.value * 60);
time = longBreak.value;
}
function updateVisualCountdown() {
    if (selectBreak.textContent === "SHORT BREAK") {
        visualShortBreakTime();
    } else {
        visualLongBreakTime();
    }
}
//visually select the break option
function breakOption() {
    if(selectBreak.textContent==="SHORT BREAK"){
        visualCountdown.textContent="";
        visualLongBreakTime();
        selectBreak.textContent="LONG BREAK";
        shortBreak.style.opacity="0.5"
        shortBreak.setAttribute("readonly", true);
        longBreak.style.opacity = "1";
        longBreak.removeAttribute("readonly");
    }else{
        visualCountdown.textContent="";
        visualShortBreakTime();
        selectBreak.textContent="SHORT BREAK";
        longBreak.style.opacity="0.5"
        longBreak.setAttribute("readonly", true);
        shortBreak.style.opacity = "1";
        shortBreak.removeAttribute("readonly");
    }
}

// countd down begiens
function countDown(time){
    clearInterval(countdown)
    let totalseconds=time*60;
    tickingSound.play()
    visualCountdown.textContent=formatTime(totalseconds);
    countdown=setInterval(()=>{
        totalseconds--;
        if(totalseconds<0){
            clearInterval(countdown);
            alertSound.play();
            tickingSound.pause();
            alert("Your Break is Up!");
            visualCountdown.classList.remove("scale-animation")
            animationProgress.classList.remove("fill-color");
            sessionUpdate();
            location.reload();
        }else{visualCountdown.textContent=formatTime(totalseconds);
        }
    },1000)
}
// function for 00:00 time format
function formatTime(seconds){
    let min=Math.floor(seconds/60);
    let sec=seconds%60;
    let formatMins=min<10?`0${min}`:min;
    let formatSecs=sec<10?`0${sec}`:sec;
    return `${formatMins}:${formatSecs}`
}

//for reloading the webpage
function cancel(){
    location.reload();
}
//store the total session count
function sessionUpdate(){
    session++;
    localStorage.setItem("session",session);
    sessionCount.innerHTML=session;
}

//animation time progress bar
function startAnimation(duration){
    animationProgress.classList.add("fill-color");
    const fillColor=document.querySelector(".fill-color");
    fillColor.style.animationName="fillcolor";
    fillColor.style.animationDuration=`${duration*60}s`;
    fillColor.style.backgroundColor="tomato";
    fillColor.style.animationTimingFunction = "linear";
}

//start countdown event
startBtn.addEventListener("click", ()=>{
    if(startBtn.textContent==="Start"){
        countDown(time);
        visualCountdown.classList.add("scale-animation");
        startAnimation(time);
        longBreak.setAttribute("readonly", true);
        shortBreak.setAttribute("readonly", true);
        selectBreak.removeEventListener("click",breakOption);
        startBtn.style.backgroundColor="red";
        startBtn.textContent="Cancel";
    }else if(startBtn.textContent==="Cancel"){
        cancel();
        visualCountdown.classList.remove("scale-animation");
        startBtn.style.backgroundColor="rgb(12, 255, 105)";
        startBtn.textContent="Start";
    }
});

selectBreak.addEventListener("click", breakOption);
shortBreak.addEventListener("input", updateVisualCountdown);
longBreak.addEventListener("input", updateVisualCountdown);