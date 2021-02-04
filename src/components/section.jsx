import React, { useState, useEffect } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import Option from './option';
import { rates } from './rates';
// import nigeria from './images/uk.jpg';
const code = Object.keys(rates);
const Section = () => {
  const [amount, setAmount] = useState(1);
  const [base, setBase] = useState(code[3]);
  const [converter, setConverter] = useState(code[0]);
  const [result, setResult] = useState();

  const calculation = () => {
    if (amount) {
      const results = parseInt(
        (rates[converter] * amount) / rates[base]
      ).toFixed(4);
      setResult(results);
      console.log(result);
    }
  };
  useEffect(() => {
    calculation();
  }, []);
  const handleInput = (e) => {
    setAmount(e.target.value);
    calculation();
  };
  const handleConverter = (e) => {
    setConverter(e.target.value);
    calculation();
  };

  const handleBase = (e) => {
    setBase(e.target.value);
    calculation();
  };
  
  

  return (
    <>
      <section>
        <h2>
          Exchange Rates: 1 NGN = 0.052 ZMW, 1 NGN = 0.0021 GBP, 1 NGN = 0.0026
          USD.
        </h2>
        <h3>
          {amount} {base} to {result} {converter}
        </h3>

        <div className="currency">
          <input type="number" value={amount} onInput={handleInput} />
          <select name="base" value={base} id="" onChange={handleBase}>
            <Option />
          </select>
        </div>
        <span className="arrow">
          <FaExchangeAlt />
        </span>
        <div className="currency">
          <input
            type="number"
            value={result === null ? 'calculating' : result}
            disabled={true}
          />
          <select
            name="converter"
            value={converter}
            id=""
            onChange={handleConverter}
          >
            <Option />
          </select>
        </div>
        <h1> base:{base}</h1>
        <h1>convert:{converter}</h1>
      </section>
    </>
  );
};

export default Section;
