import React, { useState } from 'react';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  return (
    <div id="Register">
      <h1 id="signup-header">Sign up for a new account</h1>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>
  );
};

export default Register;
