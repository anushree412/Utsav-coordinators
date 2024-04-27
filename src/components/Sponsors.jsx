import React, { useState } from 'react';

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([
    { name: '', webLink: '', description: '', imageLink: '', imagePreview: '' }
  ]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newSponsors = [...sponsors];
    newSponsors[index][name] = value;
    setSponsors(newSponsors);
  };

  const handleImagePreview = (index, event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.onloadend = () => {
      const newSponsors = [...sponsors];
      newSponsors[index]['imagePreview'] = reader.result;
      setSponsors(newSponsors);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleAddSponsor = () => {
    setSponsors([...sponsors, { name: '', webLink: '', description: '', imageLink: '', imagePreview: '' }]);
  };

  return (
    <div>
      <h4 className="Sponsors">Sponsors</h4>
      {sponsors.map((sponsor, index) => (
        <div key={index} className="mb-3">
          <h6>Sponsor {index + 1}</h6>
          <label htmlFor={`name-${index}`} className="form-label">Sponsor's Name</label>
          <input
            type="text"
            id={`name-${index}`}
            name="name"
            value={sponsor.name}
            onChange={(e) => handleInputChange(index, e)}
            className="form-control"
          />
          <label htmlFor={`webLink-${index}`} className="form-label">Web Link</label>
          <input
            type="text"
            id={`webLink-${index}`}
            name="webLink"
            value={sponsor.webLink}
            onChange={(e) => handleInputChange(index, e)}
            className="form-control"
          />
          <label htmlFor={`description-${index}`} className="form-label">Description</label>
          <textarea
            id={`description-${index}`}
            name="description"
            value={sponsor.description}
            onChange={(e) => handleInputChange(index, e)}
            className="form-control"
          />
          <label htmlFor={`imageLink-${index}`} className="form-label">Image Link</label>
          <input
            type="file"
            id={`imageLink-${index}`}
            accept="image/*"
            onChange={(e) => handleImagePreview(index, e)}
            className="form-control"
          />
          {sponsor.imagePreview && (
            <img src={sponsor.imagePreview} alt="Sponsor Preview" className="img-thumbnail mt-2" style={{ maxWidth: '100px', maxHeight: '100px' }} />
          )}
        </div>
      ))}
      <button type="button" className="btn custom-btn-primary" onClick={handleAddSponsor}>Add Sponsor</button>
    </div>
  );
};

export default Sponsors;
