import React, { useState } from 'react';
import { rates } from './rates';

const countryCode = Object.keys(rates);
const Option = () => {
  const [countrys] = useState(countryCode);

  return (
    <>
      {countrys.map((country, index) => {
        return (
          <option value={country} key={index}>
            {country}
          </option>
        );
      })}
    </>
  );
};
export default Option;
