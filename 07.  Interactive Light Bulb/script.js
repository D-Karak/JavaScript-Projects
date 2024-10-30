let bulb=document.getElementById("bulb");
let onBtn=document.getElementById("on");
let offBtn=document.getElementById("off");

//DOM function for creating a class named light and add on bulb
function light(){
    bulb.classList.add("light")
}
//on btn click for turning on the light bulb
onBtn.addEventListener("click",()=>{
    light()
    return;
})
//off btn click Event for turning off the light bulb
offBtn.addEventListener("click",()=>{
    bulb.classList.remove("light")
})