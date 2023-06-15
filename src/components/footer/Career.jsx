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


  const sendCareer = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("resume", resume);
    formData.append("expectedCTC", expectedCTC);
    formData.append("previousCTC", previousCTC);

    const res = await fetch("/hire", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
      console.log("error");
    } else {
      setShow(true);
      console.log("Email sent");
    }
  };


  return (
    <>
      {
        show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          Your Application Succesfully Done
        </Alert> : ""
      }
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

              <form >
                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

                <label>Phone Number:</label>
                <input type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

                <label>Email:</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Resume:</label>
                <input type="file" name="resume" value={resume} onChange={(e) => setResume(e.target.value)} accept=".pdf,.doc,.docx" required />
                {resume && <p>Selected file: {resume.name}</p>} {/* Display the selected file name */}

                <label>Expected CTC:</label>
                <input type="number" name="expectedCTC" value={expectedCTC} onChange={(e) => setExpectedCTC(e.target.value)} required />

                <label>Previous CTC:</label>
                <input type="number" name="previousCTC" value={previousCTC} onChange={(e) => setPreviousCTC(e.target.value)} required />

                <button type="submit" variant="primary" onclick={sendCareer}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Career;
