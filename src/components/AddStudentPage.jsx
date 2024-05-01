import React, { useState } from 'react';
import './AddStudentPage.css';
const AddStudentPage = ({ setStudents }) => {
  const [students, setStudentData] = useState([{ name: '', phone: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newStudents = [...students];
    newStudents[index][name] = value;
    setStudentData(newStudents);
  };

  const handleAddStudent = () => {
    setStudentData([...students, { name: '', phone: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle submitting the students data
    // For example, you can call a function to save the students to a database
  };

  return (
    <div className="AddStudentPage">
      <h4>Student</h4>
      <form onSubmit={handleSubmit}>
        {students.map((student, index) => (
          <div key={index} className="mb-3">
            <h6>Student {index + 1}</h6>
            <label htmlFor={`name-${index}`} className="form-label">Name</label>
            <input
              type="text"
              id={`name-${index}`}
              name="name"
              value={student.name}
              onChange={(e) => handleInputChange(index, e)}
              className="form-control"
              required
            />
            <label htmlFor={`phone-${index}`} className="form-label mt-2">Phone Number</label>
            <input
              type="text"
              id={`phone-${index}`}
              name="phone"
              value={student.phone}
              onChange={(e) => handleInputChange(index, e)}
              className="form-control"
              required
            />
          </div>
        ))}
        <button type="button" className="btn " onClick={handleAddStudent}>Add Student</button>
        <button type="submit" className="btn ">Submit</button>
      </form>
    </div>
  );
};

export default AddStudentPage;
