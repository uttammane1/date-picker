import React, { createContext, useState, useContext } from "react";

const DatePickerContext = createContext();

export const DatePickerProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    frequency: "Daily",
    interval: 1, 
    daysOfWeek: [], 
    nthDay: null, 
    startDate: new Date(),
    endDate: null,
  });

  const updateRecurrence = (key, value) => {
    setRecurrence((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <DatePickerContext.Provider value={{ recurrence, updateRecurrence }}>
      {children}
    </DatePickerContext.Provider>
  );
};

export const useDatePicker = () => useContext(DatePickerContext);
