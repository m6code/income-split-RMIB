console.log("Raise am (*3)");

const incomeField = document.getElementById("income");
const keepsAmount = document.getElementById("keeps");
const paybackAmount = document.getElementById("payback");
const emergencyAmount = document.getElementById("emergency");

function calculateIncome(income) {
    if(!isNaN(income)) {
        const keeps = (1/10) * income;
        const payback = (2/10) * income;
        const emergency = (3/10) * income;
        setAmounts(keeps, payback, emergency);
    }

}

function setAmounts(keeps, payback, emergency){
    keepsAmount.textContent = keeps;
    paybackAmount.textContent = payback;
    emergencyAmount.textContent = emergency;
    const total = keeps + payback + emergency;

    emergencyAmount.append(" " +total); 
}

function updateValues() {
    income = incomeField.value;
    calculateIncome(income);
}
