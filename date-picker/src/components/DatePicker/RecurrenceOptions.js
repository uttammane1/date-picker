import React from "react";
import { useDatePicker } from "../../context/DatePickerContext";

const RecurrenceOptions = () => {
  const { recurrence, updateRecurrence } = useDatePicker();

  const handleFrequencyChange = (e) => {
    updateRecurrence("frequency", e.target.value);
  };

  const handleIntervalChange = (e) => {
    updateRecurrence("interval", Number(e.target.value));
  };

  return (
    <div className="recurrence-options">
      <label>
        Frequency:
        <select value={recurrence.frequency} onChange={handleFrequencyChange}>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </label>
      <label>
        Every:
        <input
          type="number"
          min="1"
          value={recurrence.interval}
          onChange={handleIntervalChange}
        />
        {recurrence.frequency === "Daily" && "days"}
        {recurrence.frequency === "Weekly" && "weeks"}
        {recurrence.frequency === "Monthly" && "months"}
        {recurrence.frequency === "Yearly" && "years"}
      </label>
    </div>
  );
};

export default RecurrenceOptions;
