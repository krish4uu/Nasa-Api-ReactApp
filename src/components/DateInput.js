import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import Calendar, { utils } from "react-modern-calendar-datepicker";

const DateInput = (props) => {
  const [selectDate, setSelectedDate] = useState("");

  const formatInputValue = () => {
    if (!selectDate) return "";
    return `${selectDate.year}-${selectDate.month}-${selectDate.day}`;
  };

  const minimumDate = {
    year: 1995,
    month: 6,
    day: 16,
  };

  return (
    <div>
      <form onSubmit={props.changeDate}>
        <div className="dateInput">
          <Calendar
            calendarClassName="responsive-calendar"
            value={selectDate}
            onChange={setSelectedDate}
            formatInputText={formatInputValue}
            minimumDate={minimumDate}
            maximumDate={utils().getToday()}
            inputPlaceholder="Select a day"
            shouldHighlightWeekends
          />
          <button className="submit-button" type="submit">
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default DateInput;
