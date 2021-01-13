import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState<string>('');

  return (
    <div id="Register">
      <h1 id="signup-header">Sign up for a new account</h1>
      <input type="text" id="email-input" placeholder="Email address" />
    </div>
  );
};

export default Register;
