import React from "react";
import { useDatePicker } from "../../context/DatePickerContext";

const CalendarPreview = () => {
  const { recurrence } = useDatePicker();

  return (
    <div className="calendar-preview">
      <h3>Recurring Dates Preview</h3>
      <p>
        Frequency: {recurrence.frequency}, Every {recurrence.interval}{" "}
        {recurrence.frequency.toLowerCase()}(s)
      </p>
      <p>
        Start Date: {recurrence.startDate.toDateString()} <br />
        {recurrence.endDate && `End Date: ${recurrence.endDate.toDateString()}`}
      </p>
    </div>
  );
};

export default CalendarPreview;
