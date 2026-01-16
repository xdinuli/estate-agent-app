import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Sign in attempted for: ${formData.email}`);
  };

  return (
    <div className="signin-container">
        <div className="signin-card">
          <h2 style={{ color: '#2563eb', marginBottom: '10px' }}>Estately</h2>
          <h3 style={{ margin: '0 0 25px 0', fontWeight: '500', color: '#64748b' }}>Good to See You Back!</h3>
          
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

          <div style={{ marginTop: '25px', fontSize: '0.9rem', color: '#94a3b8' }}>
            <p>Don't have an account? <Link to="#" style={{ color: '#2563eb', fontWeight: '600' }}>Sign up</Link></p>
          </div>
        </div>
    </div>
  );
}