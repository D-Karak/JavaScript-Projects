document.addEventListener("DOMContentLoaded", () => {
    const tableBody=document.getElementById("table-body");
    const searchField=document.getElementById("search-field");
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((value) => {
            getUserData(value,tableBody);  
        });
        //for searching anyone's data from user name
            searchField.addEventListener("input",()=>{
                if(searchField!==""){
                    data.forEach((value)=>{
                        if(searchField.value.toLowerCase()==value.username.toLowerCase()){
                            tableBody.innerHTML="";
                            getUserData(value,tableBody);
                        }
                    })
                }else if(searchField.value===""){
                    tableBody.innerHTML="";
                    getUserData(value,tableBody)}
            })
            
      })
      .catch((error) => console.error("Error fetching users:", error));
  });
  

  function getUserData(val,tb){
    //creatind data tables to show datas dynamicaly
    //creating table row
    let tableRow=document.createElement("tr");
    tableRow.classList.add("table-row");
    //creating table cells
    let td1=document.createElement("td");
    td1.classList.add("serial");
    let td2=document.createElement("td");
    td2.classList.add("name");
    let td3=document.createElement("td");
    td3.classList.add("user-name");
    let td4=document.createElement("td");
    td4.classList.add("email");
    let td5=document.createElement("td");
    td5.classList.add("action");
    

    //add all cells into the row
    tableRow.append(td1,td2,td3,td4,td5);

    //creating edit and delete buttons into td6(action) cell
    let edit = document.createElement("button");
    edit.textContent="Edit";
    edit.classList.add("edit-btn");
    let del = document.createElement("button");
    del.textContent="Delete";
    td5.append(edit,del);

    //dynamicaly pushing data in cells
        td1.textContent=val.id;
        td2.textContent=val.name;
        td3.textContent=val.username;
        td4.textContent=val.email;
    //add entire row in table body
    tb.appendChild(tableRow);
}