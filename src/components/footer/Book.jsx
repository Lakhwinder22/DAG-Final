import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const AppointmentForm = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [candidatePhotoId, setCandidatePhotoId] = useState(null);
  const [guardianPhotoId, setGuardianPhotoId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append('name', name);
    // formData.append('email', email);
    // formData.append('phone', phone);
    // formData.append('date', date);
    // formData.append('time', time);
    // formData.append('candidatePhotoId', candidatePhotoId);
    // formData.append('guardianPhotoId', guardianPhotoId);
 
    const res = await fetch("/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,email,phone,date,time,
      })
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
      console.log("error")
    } else {
      setShow(true);
      // setEmail("")
      console.log("Email sent")
    }
  }

  const handleCandidatePhotoIdChange = (e) => {
    setCandidatePhotoId(e.target.files[0]);
  };

  const handleGuardianPhotoIdChange = (e) => {
    setGuardianPhotoId(e.target.files[0]);
  };

  return (
    <>
      {show && (
        <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          Your Application Successfully Sent
        </Alert>
      )}
      <div className="pagesection">
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <h2>
                  <strong>BOOK AN APPOINTMENT</strong>
                </h2>
              </div>
              <br />
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>

                <label>
                  Email:
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label>
                  Phone Number:
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>

                <label>
                  Appointment Date:
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>

                <label>
                  Appointment Time:
                  <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </label>

                <label>
                  Candidate Photo ID:
                  <input type="file" accept=".pdf" onChange={handleCandidatePhotoIdChange} />
                  {candidatePhotoId && <p>Selected file: {candidatePhotoId.name}</p>}
                </label>

                <label>
                  Guardian Photo ID:
                  <input type="file" accept=".pdf" onChange={handleGuardianPhotoIdChange} />
                  {guardianPhotoId && <p>Selected file: {guardianPhotoId.name}</p>}
                </label>

                <button type="submit" onClick={handleSubmit} variant="primary">
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

export default AppointmentForm;
