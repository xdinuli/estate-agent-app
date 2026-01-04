import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sign in attempted for: ${formData.email}`);
  };

  return (
    <div className="layout">
      <div className="signin-container">
        <div className="signin-card">
          <h2>Welcome Back</h2>
          <p>Sign in to your Estately account</p>
          
          <form onSubmit={handleSubmit} className="signin-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required 
              />
            </div>

            <button type="submit" className="signin-submit-btn">
              Sign In
            </button>
          </form>

          <div className="signin-footer">
            <p>Don't have an account? <Link to="#">Sign up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}