// event for changing the textcontent of follow button while clicked
const follow=document.getElementById("follow").addEventListener("click",()=>{
    setTimeout(()=>{
        follow.textContent="Followed"
    },200)
});