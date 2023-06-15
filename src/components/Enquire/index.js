import React, { useState } from 'react';
import "./../../App.css";
import Alert from 'react-bootstrap/Alert';

const Enquire = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail= async (e) => {
    e.preventDefault();

    const res = await fetch("/enquire", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
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
  };
  return (
    <>
      {
        show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          Your Request Succesfully Send
        </Alert> : ""
      }
      <div className='Details'>
        <div className='Entry'>
          <h3>Enquire Now.</h3>
          <p><strong>Would you like to speak to one of our advisers over the phone?<br></br> Just submit your details and we’ll be in touch shortly.<br></br> You can also email us if you would prefer.</strong></p>
        </div>
        <div>
          <form className="inquiry-form"   >
            <label className="inquiry-label">
              Name:
              <input className="inquiry-input" type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="inquiry-label">
              E-mail:
              <input className="inquiry-input" type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="inquiry-label">
              Phone:
              <input className="inquiry-input" type="number" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <label className="inquiry-label">
              Message:
              <textarea className="inquiry-textarea" type='message' name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
            </label>
            <button className="inquiry-button" variant="primary"  type="submit" onClick={sendEmail}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Enquire;
