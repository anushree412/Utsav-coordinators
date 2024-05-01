import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EventForm from './EventForm';
import './AttendancePage.css';

function AttendancePage({ students, setStudents }) {
  const { id, studentId } = useParams();
  const navigate = useNavigate();
  const selectedStudent = students.find(student => student.id === parseInt(studentId));
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [showAddStudentForm, setShowAddStudentForm] = useState(false);
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentPhone, setNewStudentPhone] = useState('');
  const [newStudentEmail, setNewStudentEmail] = useState('');

  const markAttendance = () => {
    const studentIndex = students.findIndex(student => student.id === parseInt(studentId));
    if (studentIndex !== -1) {
      const updatedStudents = [...students];
      updatedStudents[studentIndex] = {
        ...updatedStudents[studentIndex],
        attended: true
      };
      setStudents(updatedStudents);
      setAttendanceMarked(true);
      setShowAddStudentForm(false);
    }
  };

  const handleAddStudent = () => {
    setShowAddStudentForm(true);
    navigate(`/event/${id}/attendance/${studentId}/add-student`); // Navigate to the AddStudentPage route
  };

  const handleSubmitNewStudent = (event) => {
    event.preventDefault();
    const newStudent = {
      id: students.length + 1,
      name: newStudentName,
      phone: newStudentPhone,
      email: newStudentEmail,
      attended: false
    };
    setStudents([...students, newStudent]);
    setNewStudentName('');
    setNewStudentPhone('');
    setNewStudentEmail('');
    setShowAddStudentForm(false);
  };

  return (
    <div className="attendance-page">
      <div>
        <div className="form-column">
          <h2>Student Details</h2>
          <p><strong>Name:</strong> {selectedStudent && selectedStudent.name}</p>
          <p><strong>Phone:</strong> {selectedStudent && selectedStudent.phone}</p>
          <div className="two-column-container">
            <EventForm student={selectedStudent} />
            <div className="Button-section">
              {!attendanceMarked && (
                <button className="attendance-button" onClick={markAttendance}>Mark Attendance</button>
              )}
              <div className="button-column">
                {attendanceMarked && !showAddStudentForm && (
                  <button className="add-student-button" onClick={handleAddStudent}>Add Student</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendancePage;
