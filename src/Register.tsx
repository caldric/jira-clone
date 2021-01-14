import React, { useState } from 'react';

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div id="Register">
      <h1 id="signup-header">Sign up for a new account</h1>
      <form>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Register;
