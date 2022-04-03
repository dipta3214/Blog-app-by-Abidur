import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleLogin = async (googleData) => {
    const res = await fetch('api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };

  const handleFailure = (result) => {
    alert(result.error);
  };

  return (
    <div className="navbar">
      <div className="all-nav">
        <Link
          to="/"
          className="nav-item"
          style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}
        >
          <h4>Home</h4>
        </Link>
        <Link
          to="/about"
          className="nav-item"
          style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}
        >
          <h4>About</h4>
        </Link>
        <Link
          to="contact"
          className="nav-item"
          style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}
        >
          <h4>Contact</h4>
        </Link>
      </div>
      <div className="new-post-button">
        {loginData ? (
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
            cookiePolicy={'single_host_origin'}
            onSuccess={handleLogin}
            onFailure={handleFailure}
          ></GoogleLogin>
        )}
        <Link
          to="/createpost"
          style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}
        >
          <button className="btn-new-post">New Post</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
