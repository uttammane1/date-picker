import React from "react";
import DatePicker from "./components/DatePicker/DatePicker";
import { DatePickerProvider } from "./context/DatePickerContext";

const App = () => {
  return (
    <DatePickerProvider>
      <div className="App">
        <DatePicker />
      </div>
    </DatePickerProvider>
  );
};

export default App;
