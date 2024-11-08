document.getElementById("add").addEventListener("click",()=>calculate("add"));
document.getElementById("subtract").addEventListener("click",()=>calculate("subtract"));
document.getElementById("multiply").addEventListener("click",()=>calculate("multiply"));
document.getElementById("divide").addEventListener("click",()=>calculate("divide"));
function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }
    // calculation part
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                document.getElementById("result").textContent = "Cannot divide by zero.";
                return;
            }
            else{result = num1 / num2};
            break;
    }
    // showing the result
    document.getElementById("result").textContent = `Result: ${result}`;
}
//for clear every field
document.getElementById("clear-button").addEventListener("click",()=>{
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("result").textContent="";
})