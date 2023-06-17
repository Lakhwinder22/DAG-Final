import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const Career = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [expectedCTC, setExpectedCTC] = useState('');
  const [previousCTC, setPreviousCTC] = useState('');

  const sendHire = async (e) => {
    e.preventDefault();
    const res = await fetch("/hiring", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        resume,
        expectedCTC,
        previousCTC
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
      console.log("error");
    } else {
      setShow(true);
      setName('');
      setPhone('');
      setEmail('');
      setResume(null);
      setExpectedCTC('');
      setPreviousCTC('');
      console.log("Email sent");
    }
  };

  return (
    <>
      {show ? (
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          Your Application Successfully Done
        </Alert>
      ) : (
        ""
      )}
      <div className="pagesection">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="hire">
                <h2>
                  <strong>JOIN OUR TEAM</strong>
                </h2>
                <br />
                <h4>
                  <strong>Working at Direct Admission Global is more than just a job.</strong>
                </h4>
                <br />
                <h6>
                  <strong>
                    It's a chance to be a part of a global community where opportunities are offered, skills are nurtured, and excellence is rewarded.
                  </strong>
                </h6>
              </div>

              <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <label htmlFor="phone">Phone Number:</label>
                <input type="number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="resume">Resume:</label>
                <input type="file" id="resume" onChange={(e) => setResume(e.target.files[0])} accept=".pdf,.doc,.docx" required />
                {resume && <p>Selected file: {resume.name}</p>}

                <label htmlFor="expectedCTC">Expected CTC:</label>
                <input type="number" id="expectedCTC" value={expectedCTC} onChange={(e) => setExpectedCTC(e.target.value)} required />

                <label htmlFor="previousCTC">Previous CTC:</label>
                <input type="text" id="previousCTC" value={previousCTC} onChange={(e) => setPreviousCTC(e.target.value)} required />

                <button type="submit" variant="primary" onClick={sendHire}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
