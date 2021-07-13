const bill = document.getElementById("billVal");
const numOfPeople = document.getElementById("people");
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("totalAmount");
const tipButton = document.querySelectorAll(".tip-val");
const customTip = document.getElementsByClassName("custom");
const errorMessage1 = document.querySelector(".error-message1");
const errorMessage2 = document.querySelector(".error-message2");
const resetButton = document.getElementsByClassName("reset-btn")[0];

tipButton.forEach(button => {
    button.addEventListener("click", (event) => {
        if (bill.value > 0 && numOfPeople.value > 0) {
            removeErrorMessage();

            var button = event.target;
            calculations(button.value);

        } else {
            errorMessage();
        }
    });
});

customTip[0].addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        if (customTip[0].value > 0) {
            removeErrorMessage();
            calculations(customTip[0].value / 100);
            customTip[0].classList.remove("active");
        } else {
            customTip[0].classList.add("active");
            errorMessage();
        }
    }
});

resetButton.addEventListener("click", () => {
    bill.value = 0;
    numOfPeople.value = 0;
    tipAmount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";

    removeErrorMessage();
    customTip[0].classList.remove("active");
})

function errorMessage() {
    if (bill.value <= 0 && numOfPeople.value <= 0) {
        bill.classList.add("active");
        numOfPeople.classList.add("active");
        errorMessage1.classList.add("active");
        errorMessage2.classList.add("active");
    }
    else if (bill.value <= 0) {
        bill.classList.add("active");
        errorMessage1.classList.add("active");
    }
    else if (numOfPeople.value <= 0) {
        numOfPeople.classList.add("active");
        errorMessage2.classList.add("active");
    }
}

function removeErrorMessage() {
    bill.classList.remove("active");
    numOfPeople.classList.remove("active");
    errorMessage1.classList.remove("active");
    errorMessage2.classList.remove("active");
}

function calculations(tip) {
    let totalTip = bill.value * tip;
    let tipPerPerson = totalTip / numOfPeople.value;
    let totalPerPerson = bill.value / numOfPeople.value;
    let totalAmount = tipPerPerson + totalPerPerson;

    tipAmount.innerHTML = "$" + tipPerPerson.toFixed(2);
    total.innerHTML = "$" + totalAmount.toFixed(2);
}