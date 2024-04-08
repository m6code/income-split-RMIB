console.log("Raise am (*3)");

const incomeField = document.getElementById("income");

// Result Card
const keepsAmount = document.getElementById("keeps");
const paybackAmount = document.getElementById("payback");
const emergencyAmount = document.getElementById("emergency");
const deductiblesAmount = document.getElementById("total");
const balanceAmount = document.getElementById("balance");

incomeField.addEventListener("keyup", (event) => {
    if(event.key === "Enter") updateValues();
})

function calculateIncome(income) {
    if(!isNaN(income)) {
        const keeps = (1/10) * income;
        const payback = (2/10) * income;
        const emergency = (3/10) * income;
        const total = keeps + payback + emergency;
        const balance = income - total;
        setAmounts(keeps, payback, emergency, total, balance);
    }

}

function setAmounts(keeps, payback, emergency, total, balance){
    keepsAmount.textContent = keeps;
    paybackAmount.textContent = payback;
    emergencyAmount.textContent = emergency;
    deductiblesAmount.textContent = total;
    balanceAmount.textContent = balance;    
}

function updateValues() {
    income = incomeField.value;
    calculateIncome(income);
}


/** TOGGLE THEME BEHAVIOR"* */
const storageKey = 'theme-preference'

const onClick = () => {
  // flip current value
  theme.value = theme.value === 'light'
    ? 'dark'
    : 'light'

  setPreference()
}

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

const reflectPreference = () => {
  document.firstElementChild
    .setAttribute('data-theme', theme.value)

  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)
}

const theme = {
  value: getColorPreference(),
}

// set early so no page flashes / CSS is made aware
reflectPreference()

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference()

  // now this script can find and listen for clicks on the control
  document
    .querySelector('#theme-toggle')
    .addEventListener('click', onClick)
}

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches:isDark}) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference()
  })



const switcher = document.querySelector('#theme-switcher')
const doc = document.firstElementChild

switcher.addEventListener('input', e =>
  setTheme(e.target.value))

const setTheme = theme =>
  doc.setAttribute('color-scheme', theme)