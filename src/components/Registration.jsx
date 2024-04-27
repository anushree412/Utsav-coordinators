import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    stopWebReg: false,
    stopSpotReg: false,
    stopAllReg: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value === 'true' ? true : false
    }));
  };

  return (
    <div>
      <h4 className="Registration">Registration</h4>
      <div className="mb-3">
        <label htmlFor="stopWebReg" className="form-label">Stop Web Registration</label>
        <select
          id="stopWebReg"
          name="stopWebReg"
          value={formData.stopWebReg.toString()}
          onChange={handleInputChange}
          className="form-select"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="stopSpotReg" className="form-label">Stop Spot Registration</label>
        <select
          id="stopSpotReg"
          name="stopSpotReg"
          value={formData.stopSpotReg.toString()}
          onChange={handleInputChange}
          className="form-select"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="stopAllReg" className="form-label">Stop All Registration</label>
        <select
          id="stopAllReg"
          name="stopAllReg"
          value={formData.stopAllReg.toString()}
          onChange={handleInputChange}
          className="form-select"
        >
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
    </div>
  );
};

export default Registration;
