# Temperature Converter Exercise

## Goal of the application

Build a temperature converter using React, where users can input a temperature in Celsius or Fahrenheit, and the converted temperature is displayed in real-time.

## What components should be created? In which order?

## hint: start by putting both components inside one file, then continue with modularizing it!

1. **TemperatureInput**: A component that takes a temperature input and notifies the parent when the value changes. (hint: think whether you need two different compoents, one for Celsius and one for Fahrenheit input.)
2. **Calculator**: The parent component that manages the state and renders two `TemperatureInput` components, one for Celsius and one for Fahrenheit.

# const toCelsius = (fahrenheit) => ((fahrenheit - 32) \* 5) / 9;

# const toFahrenheit = (celsius) => (celsius \* 9) / 5 + 32;

## Instructions

1. **TemperatureInput Component**

   - Create a functional component named `TemperatureInput`.
   - Use props (`scale`, `temperature`, `onTemperatureChange`) to receive data.
   - Render an input field for entering the temperature.

2. **Calculator Component**
   - Create a functional component named `Calculator`.
   - Use the `useState` hook to manage the state (`celsius` and `fahrenheit`).
   - Implement conversion functions (`toCelsius` and `toFahrenheit`).
   - Pass appropriate props to `TemperatureInput` instances.
   - Handle temperature changes and update the state accordingly.
