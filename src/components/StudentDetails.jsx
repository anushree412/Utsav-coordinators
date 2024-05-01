// import React from 'react';
import { useParams } from 'react-router-dom';
import EventForm from './EventForm'; // Import the EventForm component

function StudentDetails() {
  // Get the student ID from the URL params
  const { id } = useParams();

  // Find the student by ID
  const student = students.find(student => student.id === parseInt(id));

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <div>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
      </div>
      <EventForm student={student} />
    </div>
  );
}

export default StudentDetails;
