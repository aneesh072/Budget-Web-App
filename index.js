const balance = document.getElementById("balance");
const inflow = document.getElementById("income");
const outflow = document.getElementById("expense");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

//Get transcation from local storage
f

//Add transcation function

function addTranscation(e){
    e.preventDefault();
    //condition to check if the fields are emptyt or not

    if(text.ariaValueMax.trim() === "" || amount.ariaValueMax.trim() === ""){
        document.getElementById("error_msg").innerHTML = 
        <span> Error. Enter text and amount first.</span>;
        settimeout (
            () => (document.getElementById("eooro_msg").innerHTML = ""),
            5000
        );
    } 
    else{
        const transcation = {
        
            id: generateID(),
            text: text.value,
            amount: +amount.value,
        };

        transcation.push(transcation);

        // I want to add transcation to document object 
        //modle DOM - for local storage



        //Invoke add transcation DOM
    }

    // Generate random ID - for delete button

    function generateID(){
        return Math.floor(Math.random() * 10000000);
    }

    //Transcation history
    function addTranscationDOM(transcation){
    
        // Sign ( + or -)

        const sign = transcation.amount < 0 ? "_" : "+";

        const item = document.createElement("li");

        //Add list element based on sign
        item.classList.add(transcation.amount < 0 ? "minus" : "plus");

        // Adding (rendering) the list element with hthe delete button on the page 
        //using innerHEML property

        item.innerHTML = '${transcation.text} ${sign} ${Math.abs(transcation.amount)'}

        <button class="delete-btn"
        onclick="removeTranscation(${transcation.id})"
        X>
        </button>;

        //Remove transcation by ID
        
    }




}

form.addEventListener("submit", addTranscation)