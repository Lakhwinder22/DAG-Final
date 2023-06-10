import React, { useState } from 'react';
import "./../../App.css";

function Enquire() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, like submit it to an API
  };
  return (
    <div className='Details'>
      <div className='Entry'>
        <h3>Enquire Now.</h3>
        <p><strong>Would you like to speak to one of our advisers over the phone?<br></br> Just submit your details and we’ll be in touch shortly.<br></br> You can also email us if you would prefer.</strong></p>
      </div>
      <div>
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <label className="inquiry-label">
            Name:
            <input className="inquiry-input" type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>
          <label className="inquiry-label">
            E-mail:
            <input className="inquiry-input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>
          <label className="inquiry-label">
            Phone:
            <input className="inquiry-input" type="Number" value={phone} onChange={(event) => setPhone(event.target.value)} />
          </label>
          <label className="inquiry-label">
            Message:
            <textarea className="inquiry-textarea" value={message} onChange={(event) => setMessage(event.target.value)} />
          </label>
          <button className="inquiry-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default Enquire;
