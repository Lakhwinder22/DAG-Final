import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username, password
      })
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 401 || !data) {
      console.log("error")
    } else {
      setShow(true);
      // setEmail("")
      console.log(`Username: ${username}, Password: ${password}`)
    }
   
    
  };

  return (
    <div className='pagesection'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            {
              show ? <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                You Succesfully Login
              </Alert> : ""
            }
            <h2><strong>My account</strong></h2>
            <div className="cont1">
              <h3>Login</h3>
              <form  >
                <div className="input-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter your username"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                  />
                </div>
                <button variant="primary" onClick={handleSubmit} type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
