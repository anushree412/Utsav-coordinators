import React from 'react';
import DatePicker from 'react-datepicker';
import { FaCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';

const DateInput = ({ selectedDate, onChange }) => {
  return (
    <div className="input-group">
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select Date"
        className="form-control"
      />
      <span className="input-group-text">
        <FaCalendarAlt />
      </span>
    </div>
  );
};

export default DateInput;
