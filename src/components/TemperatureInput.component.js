import React from "react";

const TemperatureInput = ({ scale, temperature, onChange }) => {
  const onChangeHandler = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <label htmlFor="temperature">
        Insert the value for the temp. in {scale}:
      </label>
      <input
        name="temperature"
        value={temperature}
        onChange={onChangeHandler}
      />
    </>
  );
};

export { TemperatureInput };
