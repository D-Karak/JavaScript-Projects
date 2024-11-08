// event for changing the textcontent of follow button while clicked
document.getElementById("follow").addEventListener("click",()=>{
    setTimeout(()=>{
        if(follow.textContent==="Follow"){
            follow.textContent="Followed";
        }
        else{
            //an alert will show and the the button will unfollowed if the button is followed and clicked again
           const userName= document.getElementById("user-name").textContent;
            alert(`You have unfollowd ${userName}`)
            follow.textContent="Follow";
        }
    },200)
});