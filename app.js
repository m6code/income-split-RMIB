console.log("Raise am (*3)");

const incomeField = document.getElementById("income");
const keepsAmount = document.getElementById("keeps");
const paybackAmount = document.getElementById("payback");


function calculateIncome(income) {
    if(!isNaN(income)) {
        const keeps = (1/10) * income;
        const payback = (2/10) * income;
        setAmounts(keeps, payback);
    }

}

function setAmounts(keeps, payback){
    keepsAmount.textContent = keeps;
    paybackAmount.textContent = payback;
}

function updateValues() {
    income = incomeField.value;
    calculateIncome(income);
}
