import React, { useState } from "react";
import { TemperatureInput } from "./TemperatureInput.component";

const Calculator = () => {
  const [celsius, setCelsius] = useState(5);
  const [fahrenheit, setFahrenheit] = useState(30);

  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  const onCelsiusChangeHandler = (value) => {
    setCelsius(value);
    setFahrenheit(toFahrenheit(value));
  };

  const onFahrenheitChangeHandler = (value) => {
    setFahrenheit(value);
    setCelsius(toCelsius(value));
  };

  return (
    <div className="calcWrapper">
      <TemperatureInput
        scale="celsius"
        temperature={celsius}
        onChange={onCelsiusChangeHandler}
      />
      <TemperatureInput
        scale="fahrenheit"
        temperature={fahrenheit}
        onChange={onFahrenheitChangeHandler}
      />
    </div>
  );
};

export default Calculator;
