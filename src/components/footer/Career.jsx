import React, { useState } from 'react';

function Career() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [expectedCTC, setExpectedCTC] = useState('');
  const [previousCTC, setPreviousCTC] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here, such as sending the data to a server or performing other actions

    // Reset form fields after submission
    setName('');
    setPhone('');
    setEmail('');
    setResume(null);
    setExpectedCTC('');
    setPreviousCTC('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  return (
    <>
      <div className='pagesection'>
        <div className='container' >
          <div className='row'>
            <div className='col'>
              <div className='hire'>
                <h2><strong>JOIN OUR TEAM</strong></h2>
                <br></br>
                <h4> <strong>Working at Direct Admission Global is more than just a job.</strong></h4>
                <br></br>
                  <h6><strong>It's Chance to be a part of a global Community where opportunities are offered Skills are Nurtured & Excellence is rewarded.</strong></h6>
                 
              </div>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                  <label htmlFor="resume">Resume:</label>
                  <input type="file" id="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                  {resume && <p>Selected file: {resume.name}</p>} {/* Display the selected file name */}

                  <label htmlFor="expectedCTC">Expected CTC:</label>
                  <input type="text" id="expectedCTC" value={expectedCTC} onChange={(e) => setExpectedCTC(e.target.value)} required />

                  <label htmlFor="previousCTC">Previous CTC:</label>
                  <input type="text" id="previousCTC" value={previousCTC} onChange={(e) => setPreviousCTC(e.target.value)} required />

                  <button type="submit">Submit</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Career;
