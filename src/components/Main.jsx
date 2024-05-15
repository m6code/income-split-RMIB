export const Main = () => {
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
          />
        </label>
        <button onClick="">Split Income Now</button>
        <div className="result-card" tabIndex="0">
          <p>
            &#x20A6<span id="keeps">0</span> for keeps
          </p>
          <p>
            &#x20a6<span id="payback">0</span> for repayment
          </p>
          <p>
            &#x20a6<span id="emergency">0</span> for emergency
          </p>
          <p>
            <strong>
              &#x20a6<span id="total">0</span>
            </strong>{" "}
            is deductibles
          </p>
          <p>
            <strong>
              &#x20a6<span id="balance">0</span>
            </strong>{" "}
            is your balance
          </p>
        </div>
      </div>
    </main>
  );
};
