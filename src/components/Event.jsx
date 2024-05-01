import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Event.css';
import EventForm from './EventForm';

function Event() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', phone: '1234567890', attended: false },
    { id: 2, name: 'Student 2', phone: '2345678901', attended: false },
    { id: 3, name: 'Student 3', phone: '3456789012', attended: false },
  ]);

  const handleAttendanceClick = (studentId) => {
    navigate(`/event/${id}/attendance/${studentId}`);
  };

  return (
    <div className="event-details">
      <h2>Students Registered for Event {id}</h2>
      <div className="student-list">
        {students.map(student => (
          <div key={student.id} className="student-card">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <button className="attendance-button" onClick={() => handleAttendanceClick(student.id)}>
              Attendance
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Event;
