import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="mobile-container" style={{ padding: '20px' }}>
      <h2>Welcome to PopX</h2>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button style={{ width: '100%', padding: '12px', backgroundColor: '#9933cc', color: 'white', border: 'none', borderRadius: '8px', marginBottom: '10px' }} onClick={() => navigate('/signin')}>
        Create Account
      </button>
      <button style={{ width: '100%', padding: '12px', backgroundColor: '#d0bfff', color: 'white', border: 'none', borderRadius: '8px' }} onClick={() => navigate('/signin')}>
        Already Registered? Login
      </button>
    </div>
  );
};

const SignInScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="mobile-container" style={{ padding: '20px' }}>
      <h2>Signin to your PopX account</h2>
      <p style={{ textAlign: 'center', marginBottom: '20px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
      <button style={{ width: '100%', padding: '12px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '8px' }} onClick={() => navigate('/accountsettings')}>Login</button>
      <div className="pagination">
        <button>🏠</button>
        <button>{'<'}</button>
        <span>2 of 4</span>
        <button>{'>'}</button>
      </div>
    </div>
  );
};

const CreateAccountScreen = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('Yes');

  return (
    <div className="mobile-container" style={{ padding: '20px' }}>
      <h2>Create your PopX account</h2>
      <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
      <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
      <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
      <input type="text" placeholder="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <label>Are you an Agency?</label>
        <button style={{ backgroundColor: isAgency === 'Yes' ? '#9933cc' : '#f0f0f0', color: isAgency === 'Yes' ? 'white' : 'black', padding: '8px 16px', border: 'none', borderRadius: '20px', marginLeft: '10px' }} onClick={() => setIsAgency('Yes')}>Yes</button>
        <button style={{ backgroundColor: isAgency === 'No' ? '#9933cc' : '#f0f0f0', color: isAgency === 'No' ? 'white' : 'black', padding: '8px 16px', border: 'none', borderRadius: '20px', marginLeft: '10px' }} onClick={() => setIsAgency('No')}>No</button>
      </div>
      <button style={{ width: '100%', padding: '12px', backgroundColor: '#9933cc', color: 'white', border: 'none', borderRadius: '8px' }} onClick={() => navigate('/accountsettings')}>Create Account</button>
      <div className="pagination">
        <button>🏠</button>
        <button>{'<'}</button>
        <span>3 of 4</span>
        <button>{'>'}</button>
      </div>
    </div>
  );
};

const AccountSettingsScreen = () => {
  return (
    <div className="mobile-container" style={{ padding: '20px' }}>
      <h2>Account Settings</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <img src="https://via.placeholder.com/100" alt="Profile" style={{ width: '80px', height: '80px', borderRadius: '40px', marginRight: '20px' }} />
        <div>
          <p style={{ margin: '0', fontWeight: 'bold' }}>Marry Doe</p>
          <p style={{ margin: '0', color: 'gray' }}>MarryGmail.Com</p>
        </div>
      </div>
      <p style={{ lineHeight: '24px' }}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr. Sed Diam Nonumy eirmod Tempor invidunt Ut
        Labore Et Dolore Magna Aliquyam erat, Sed Diam
      </p>
      <div className="pagination">
        <button>🏠</button>
        <button>{'<'}</button>
        <span>4 of 4</span>
        <button>{'>'}</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/createaccount" element={<CreateAccountScreen />} />
        <Route path="/accountsettings" element={<AccountSettingsScreen />} />
      </Routes>
    </Router>
  );
}

export default App;