const tableBody=document.getElementById("table-body");

const Users=[
    {
        userName: "Monkey D. Luffy",
        userEmail: "abcd@example.com",
        userCity: "Fusha Village (East Blue)",
        userPhone: "9876543201",
    },
    {
        userName: "Zoro",
        userEmail: "efgh@example.com",
        userCity: "East Blue",
        userPhone: "7894563201",
    },
    {
        userName: "Nami",
        userEmail: "efgh@example.com",
        userCity: "Cocoyasi Village (East Blue)",
        userPhone: "7894563201",
    },
    {
        userName: "Usopp",
        userEmail: "ijkl@example.com",
        userCity: "Syrup Village (East Blue)",
        userPhone: "4561237809",
    },
    {
        userName: "Sanji",
        userEmail: "mnop@example.com",
        userCity: "North Blue(Baratie)",
        userPhone: "3214560879",
    },
    {
        userName: "Chopper",
        userEmail: "uvwx@example.com",
        userCity: "Drum Island (Grand Line)",
        userPhone: "2589630147",
    },
    {
        userName: "Nico Robin",
        userEmail: "yzab@example.com",
        userCity: "Ohara (West Blue)",
        userPhone: "9630258741",
    },
    {
        userName: "Franky",
        userEmail: "cdef@example.com",
        userCity: "Water 7 (Grand Line)",
        userPhone: "7532016984",
    },
    {
        userName: "Brook",
        userEmail: "ghij@example.com",
        userCity: "West Blue",
        userPhone: "951023476",
    },
    {
        userName: "Jinbe",
        userEmail: "klmn@example.com",
        userCity: "Fish-Man Island",
        userPhone: "2580143697",
    }
]


Users.forEach((value,index)=>{
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
    td3.classList.add("email");
    let td4=document.createElement("td");
    td4.classList.add("city");
    let td5=document.createElement("td");
    td5.classList.add("phone");
    let td6=document.createElement("td");
    td6.classList.add("action");

    //add all cells into the row
    tableRow.append(td1,td2,td3,td4,td5,td6);

    //creating edit and delete buttons into td6(action) cell
    let edit = document.createElement("button");
    edit.textContent="Edit";
    edit.classList.add("edit-btn");
    let del = document.createElement("button");
    del.textContent="Delete";
    td6.append(edit,del);

    //dynamicaly pushing data in cells
        td1.textContent=index+1;
        td2.textContent=value.userName;
        td3.textContent=value.userEmail;
        td4.textContent=value.userCity;
        td5.textContent=value.userPhone;
    //add entire row in table body
    tableBody.appendChild(tableRow);
    
})