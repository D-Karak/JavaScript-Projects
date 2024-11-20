document.addEventListener("DOMContentLoaded", () =>{

    const userData = document.getElementById("user-data");
    const jokeData = document.getElementById("joke-data");

    const userBtn = document.getElementById("fetch-user-btn");
    const jokeBtn = document.getElementById("fetch-joke-btn");

    function fetchUser() {
        userData.innerHTML="<p>Loading...</p>"

        fetch("https://randomuser.me/api/")
        .then((response)=>response.json())
        .then((data)=>{
        const User=data.results[0];
            userData.innerHTML=`
            <img src="${User.picture.large}" alt="user-img" width="100" style="border-radius:50%"/>
            <p><strong>Name:</strong> ${User.name.first} ${User.name.last}</p>
            <p><strong>Email:</strong> ${User.email}</p>
            <p><strong>Gender:</strong> ${User.gender}</p>
            <p><strong>Location:</strong> ${User.location.city}, ${User.location.state}</p>
            <p><strong>Country:</strong> ${User.location.country}</p>
            `
        })

     }
    function fetchJoke() {
        jokeData.innerHTML="Loading...";
        fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response=>response.json())
        .then(data=>{
            jokeData.innerHTML=`
            <p><strong>Setup:</strong> ${data.setup}</p>
            <p><strong>Punchline:</strong> ${data.punchline}</p>
            `
        })
     }
userBtn.addEventListener("click",fetchUser);
jokeBtn.addEventListener("click",fetchJoke);

    fetchUser();
    fetchJoke();
})