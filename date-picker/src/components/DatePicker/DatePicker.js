import React from "react";
import "./DatePicker.css";
import RecurrenceOptions from "./RecurrenceOptions";
import CalendarPreview from "./CalendarPreview";
import DateInput from "./DateInput";

const DatePicker = () => {
  return (
    <div className="date-picker">
      <h2>Date Picker</h2>
      <DateInput />
      <RecurrenceOptions />
      <CalendarPreview />
    </div>
  );
};

export default DatePicker;
