console.log("Raise am (*3)");

const incomeField = document.getElementById("income");

// Result Card
const keepsAmount = document.getElementById("keeps");
const paybackAmount = document.getElementById("payback");
const emergencyAmount = document.getElementById("emergency");
const deductiblesAmount = document.getElementById("total");
const balanceAmount = document.getElementById("balance");
const doc = document.firstElementChild;

incomeField.addEventListener("keyup", (event) => {
    if(event.key === "Enter") updateValues();
})

function calculateIncome(incme) {
    const income = Number(incme);
    console.log(typeof(income));
    if(!isNaN(income)) {
        const keeps = (1/10) * income;
        const payback = (2/10) * income;
        const emergency = (3/10) * income;
        const total = keeps + payback + emergency;
        const balance = income - total;
        setAmounts(keeps, payback, emergency, total, balance);
    } else alert(`${incme} is not a valid number`);

}

function setAmounts(keeps, payback, emergency, total, balance){
    keepsAmount.textContent = keeps;
    paybackAmount.textContent = payback;
    emergencyAmount.textContent = emergency;
    deductiblesAmount.textContent = total;
    balanceAmount.textContent = balance;    
}

function updateValues() {
    income = incomeField.value.trim();
    calculateIncome(income);
}
