let grandTotal = "";
let firstNumber = 0;
let secondNumber = 0;
let operator = "";
let firstTotal = "";
let secondTotal = "";

let getFirstDataValue = function () {
 
    {
        if (this.value === "CE") {
            console.log("first grand total: " + grandTotal);
            grandTotal = "0.00";
            firstTotal = "";
            let solutionBox = document.querySelector(".solutionBox");
            solutionBox.textContent = "0.00";
            console.log(grandTotal);
        }
        if (this.value === "C") {
            firstTotal = "";
            let solutionBox = document.querySelector(".solutionBox");
            solutionBox.textContent = "0.00";
            console.log(firstTotal);
        }
        if (
            this.value === "1" ||
            this.value === "2" ||
            this.value === "3" ||
            this.value === "4" ||
            this.value === "5" ||
            this.value === "6" ||
            this.value === "7" ||
            this.value === "8" ||
            this.value === "9" ||
            this.value === "0" ||
            this.value === "0"
        ) {
            firstTotal = firstTotal + this.value;

            let solutionBox = document.querySelector(".solutionBox");
            if (firstTotal.charAt(0) === "0") {
                firstTotal = firstTotal.slice(1);

                console.log(firstTotal);
                firstTotal = "";
            } else {
                solutionBox.innerText = firstTotal;
            }
        }
        if (this.value === ".") {
            if (!firstTotal.includes(".")) {
                firstTotal = firstTotal + this.value;
                console.log(firstTotal);
            }
        }
        if (
            this.value === "+" ||
            this.value === "-" ||
            this.value === "*" ||
            this.value === "/"
        ) {
            operator = this.value;

            console.log(operator);
            firstTotal = parseFloat(firstTotal);
            firstNumber = firstTotal;
            firstTotal = ""
      
            console.log(secondTotal);
            console.log("First total from last if statement: " + firstTotal);
            console.log("grand total from last if statement: " + firstNumber);
            console.log("operator: " + operator);
    
            let buttons = document.querySelectorAll("button");
            buttons.forEach(button => {
                button.removeEventListener('click', getFirstDataValue);
                
            });
            activateButtonsForSecondValue();
            
        
        }
    }
}

let getSecondDataValue = function () {
   
    {
        if (this.value === "CE") {
            console.log("first grand total: " + grandTotal);
            secondTotal = "";
            let solutionBox = document.querySelector(".solutionBox");
            solutionBox.textContent = "0.00";
            console.log(grandTotal);
        }
        if (this.value === "C") {
            secondTotal = "";
            let solutionBox = document.querySelector(".solutionBox");
            solutionBox.textContent = "0.00";
            console.log(firstTotal);
        }
        if (
            this.value === "1" ||
            this.value === "2" ||
            this.value === "3" ||
            this.value === "4" ||
            this.value === "5" ||
            this.value === "6" ||
            this.value === "7" ||
            this.value === "8" ||
            this.value === "9" ||
            this.value === "0" ||
            this.value === "0"
        ) {
            secondTotal = secondTotal + this.value;

            let solutionBox = document.querySelector(".solutionBox");
            if (secondTotal.charAt(0) === "0") {
                secondTotal = secondTotal.slice(1);

                console.log(secondTotal);
                secondTotal = "";
            } else {
                solutionBox.innerText = secondTotal;
            }
        }
        if (this.value === ".") {
            if (!secondTotal.includes(".")) {
                secondTotal = secondTotal + this.value;
                console.log(secondTotal);
            }
        }
        if (this.value === "=") {
            console.log("Equals Pressed")
            
        

            console.log(operator);
            secondTotal = parseFloat(secondTotal);
            secondNumber = secondTotal;
            secondTotal = ""
      
            console.log(secondTotal);
            console.log("First total from last if statement: " + firstNumber + " and typeof first number is: " + (typeof firstNumber) );
            console.log("Second total from last if statement: " + secondNumber + " and typeof first number is: " + (typeof secondNumber));
            grandTotal = parseFloat(eval(firstNumber + operator + secondNumber).toFixed(6));
            
            console.log("operator: " + operator);
            let solutionBox = document.querySelector(".solutionBox");
            solutionBox.textContent=grandTotal;
    
            let buttons = document.querySelectorAll("button");
            buttons.forEach(button => {
                button.removeEventListener('click', getSecondDataValue);
                firstTotal = grandTotal;
               
            });
            activateButtonsForFirstValue();
        }
    }
  
}
    //Add Button Click events to get Value 1
    function activateButtonsForFirstValue() {
        let buttons = document.querySelectorAll("button");
        console.log(buttons);
        buttons.forEach((button) => {
            button.addEventListener("click", getFirstDataValue);
        });
    
    };
//Add Button Click events to get Value 2
    function activateButtonsForSecondValue() {
        let buttons2 = document.querySelectorAll("button");
        console.log(buttons2);
        buttons2.forEach((button) => {
            button.addEventListener("click", getSecondDataValue);
        });
    
};
    
    activateButtonsForFirstValue();
    
