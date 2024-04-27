import React, { useState } from 'react';

const IndustryConnect = () => {
  const [industryConnect, setIndustryConnect] = useState({
    industryConnect: '',
    posterLink: '',
    posterPreview: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setIndustryConnect(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handlePosterPreview = () => {
    const { posterLink } = industryConnect;
    setIndustryConnect(prevState => ({
      ...prevState,
      posterPreview: posterLink
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handlePosterPreview();
    }
  };

  return (
    <div>
      <h4 className="IndustryConnect">Industry Connect</h4>
      <div className="mb-3">
        <label htmlFor="industryConnect" className="form-label">Industry Connect</label>
        <input
          type="text"
          id="industryConnect"
          name="industryConnect"
          value={industryConnect.industryConnect}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="posterLink" className="form-label">Poster Link</label>
        <input
          type="url"
          id="posterLink"
          name="posterLink"
          value={industryConnect.posterLink}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onBlur={handlePosterPreview}
          className="form-control"
        />
      </div>
      {industryConnect.posterPreview && (
        <div className="mb-3">
          {/* <label>Poster Preview</label> */}
          <img src={industryConnect.posterPreview} alt="Poster Preview" className="img-thumbnail" style={{ maxWidth: '100px', maxHeight: '100px' }} />
        </div>
      )}
    </div>
  );
};

export default IndustryConnect;
