import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [validCard, setValidCard] = useState(true);

  useEffect(() => {
    const num = (num) => {
      let sum = 0;
      let doubleDigit = false;

      const reverseCard = num
        .split("")
        .reverse()
        .map((cardDigit) => {
          let digit = parseInt(cardDigit, 10);

          if (doubleDigit) {
            digit *= 2;
            if (digit > 9) {
              digit -= 9;
            }
          }
          doubleDigit = !doubleDigit;

          return digit;
        });

      sum = reverseCard.reduce(
        (prevValue, currValue) => prevValue + currValue,
        0
      );
      return sum % 10 === 0;
    };
    setValidCard(num(userInput));
  }, [userInput]);

  const handleChange = (e) => {
    const input = e.target.value;
    setUserInput(input);
  };

  return (
    <div>
      <h2>valid card numbers</h2>
      <input
        type="text"
        id="userInput"
        value={userInput}
        onChange={handleChange}
        placeholder="typeCardNumber"
        maxLength={16}
      />
      {validCard ? <h3>Valid card number</h3> : <h3>invalid card number</h3>}
    </div>
  );
}
  

export default App;
