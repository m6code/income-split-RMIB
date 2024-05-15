import { useEffect, useRef, useState } from "react";

export const Main = () => {
  const [results, setResults] = useState({
    keeps: 0,
    payback: 0,
    emergency: 0,
    total: 0,
    balance: 0,
  });

  const inputValueRef = useRef(null);

  const calculateIncomeSplit = (incme) => {
    // Regular Expression to replace all commas (,) and whitespaces ( ) characters
    const regex = /[ ,]+/g;
    const income = Number(incme.replace(regex, ""));
    // console.log(typeof income);
    if (!isNaN(income)) {
      const keeps = (1 / 10) * income;
      const payback = (2 / 10) * income;
      const emergency = (3 / 10) * income;
      const total = keeps + payback + emergency;
      const balance = income - total;
      setResults({
        keeps,
        payback,
        emergency,
        total,
        balance,
      });
    } else alert(`${incme} is not a valid number`);
  };

  const handleSubmit = () => {
    calculateIncomeSplit(inputValueRef.current.value);
  };

  useEffect(() => {
    inputValueRef.current.addEventListener("keyup", (event) => {
      if (event.key === "Enter") handleSubmit();
    });
  }, []);

  const { keeps, payback, total, emergency, balance } = results;

  return (
    <main>
      <div>
        <label>
          <input
            id="income"
            name="income"
            placeholder="Enter your income for the month"
            type="text"
            maxLength="19"
            ref={inputValueRef}
          />
        </label>
        <button onClick={handleSubmit}>Split Income Now</button>
        <div className="result-card" tabIndex="0">
          <p>
            {"\u20A6"}
            <span id="keeps">{keeps}</span> for keeps
          </p>
          <p>
            {"\u20A6"}
            <span id="payback">{payback}</span> for repayment
          </p>
          <p>
            {"\u20A6"}
            <span id="emergency">{emergency}</span> for emergency
          </p>
          <p>
            <strong>
              {"\u20A6"}
              <span id="total">{total}</span>
            </strong>{" "}
            is deductibles
          </p>
          <p>
            <strong>
              {"\u20A6"}
              <span id="balance">{balance}</span>
            </strong>{" "}
            is your balance
          </p>
        </div>
      </div>
    </main>
  );
};
