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
    const res = await fetch('/api/google-login', {
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
    localStorage.setItem('authentication', 'true');

    window.location.reload();
  };

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    localStorage.removeItem('authentication');
    setLoginData(null);
  };

  const handleFailure = (result) => {
    alert(result.error);
  };

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        LOGO
      </a>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler">
        <i className="ri-menu-line"></i>
      </label>
      <div className="menu">
        <ul className="list">
          <Link
            to="/"
            className="nav-item"
            style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}
          >
            Home
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

          {/* <div className="new-post-button"> */}
          {loginData ? (
            <Link
              style={{ color: 'white', textDecoration: 'none', padding: '2vh' }}
            >
              <h4 onClick={handleLogout}>Logout</h4>
            </Link>
          ) : (
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Login with Google"
              cookiePolicy={'single_host_origin'}
              onSuccess={handleLogin}
              onFailure={handleFailure}
            ></GoogleLogin>
          )}
          {localStorage.getItem('authentication') && (
            <Link
              to="/createpost"
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '2vh'
              }}
            >
              <button className="btn-new-post">New Post</button>
            </Link>
          )}
          {/* </div> */}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
