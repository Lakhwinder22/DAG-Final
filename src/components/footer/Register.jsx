import React from 'react';
// import '../../App.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    // Perform login authentication or API request here
    console.log(`Username: ${username}, Password: ${password}`);
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className='pagesection'>
      <div className='container' >
        <div className='row'>
          <div className='col'>
          <h2><strong>My account</strong></h2>
      <div className="cont1">
      
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
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
              onChange={this.handleInputChange}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default LoginPage;
