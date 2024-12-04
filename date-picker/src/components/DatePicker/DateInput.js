import React from "react";
import { useDatePicker } from "../../context/DatePickerContext";

const DateInput = () => {
  const { recurrence, updateRecurrence } = useDatePicker();

  const handleDateChange = (e, type) => {
    updateRecurrence(type, new Date(e.target.value));
  };

  return (
    <div className="date-input">
      <label>
        Start Date:
        <input
          type="date"
          value={recurrence.startDate.toISOString().slice(0, 10)}
          onChange={(e) => handleDateChange(e, "startDate")}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          value={recurrence.endDate ? recurrence.endDate.toISOString().slice(0, 10) : ""}
          onChange={(e) => handleDateChange(e, "endDate")}
        />
      </label>
    </div>
  );
};

export default DateInput;
