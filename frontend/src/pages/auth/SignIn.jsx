import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/dashboard';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        toast.success(result.message);
        const from = location.state?.from?.pathname || '/dashboard';
        navigate(from, { replace: true });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledWrapper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="signin-container">
        <div className="content">
          <div className="text">
            Admin Login
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <input 
                required 
                type="email" 
                name="email"
                className={`input ${errors.email ? 'error' : ''}`}
                value={formData.email}
                onChange={handleInputChange}
                disabled={loading}
              />
              <span className="span">
                <svg 
                  xmlSpace="preserve" 
                  style={{enableBackground: 'new 0 0 512 512'}} 
                  viewBox="0 0 512 512" 
                  y={0} 
                  x={0} 
                  height={20} 
                  width={20} 
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  version="1.1" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path 
                      fill="currentColor" 
                      d="M256 0c-74.439 0-135 60.561-135 135s60.561 135 135 135 135-60.561 135-135S330.439 0 256 0zM423.966 358.195C387.006 320.667 338.009 300 286 300h-60c-52.008 0-101.006 20.667-137.966 58.195C51.255 395.539 31 444.833 31 497c0 8.284 6.716 15 15 15h420c8.284 0 15-6.716 15-15 0-52.167-20.255-101.461-57.034-138.805z" 
                    />
                  </g>
                </svg>
              </span>
              <label className="label">Email</label>
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="field">
              <input 
                required 
                type="password" 
                name="password"
                className={`input ${errors.password ? 'error' : ''}`}
                value={formData.password}
                onChange={handleInputChange}
                disabled={loading}
              />
              <span className="span">
                <svg 
                  xmlSpace="preserve" 
                  style={{enableBackground: 'new 0 0 512 512'}} 
                  viewBox="0 0 512 512" 
                  y={0} 
                  x={0} 
                  height={20} 
                  width={20} 
                  xmlnsXlink="http://www.w3.org/1999/xlink" 
                  version="1.1" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path 
                      fill="currentColor" 
                      d="M336 192h-16v-64C320 57.406 262.594 0 192 0S64 57.406 64 128v64H48c-26.453 0-48 21.523-48 48v224c0 26.477 21.547 48 48 48h288c26.453 0 48-21.523 48-48V240c0-26.477-21.547-48-48-48zm-229.332-64c0-47.063 38.27-85.332 85.332-85.332s85.332 38.27 85.332 85.332v64H106.668zm0 0" 
                    />
                  </g>
                </svg>
              </span>
              <label className="label">Password</label>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>
            <div className="forgot-pass">
              <a href="#">Forgot Password?</a>
            </div>
            <button 
              type="submit" 
              className="button"
              disabled={loading}
            >
              {loading ? (
                <span className="loading">
                  <svg className="spinner" width="20" height="20" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3" fill="currentColor">
                      <animate attributeName="r" values="3;9;3" dur="1s" repeatCount="indefinite"/>
                      <animate attributeName="fill-opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
                    </circle>
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign in'
              )}
            </button>
          </form>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .signin-container {
    min-height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: linear-gradient(135deg, var(--seasalt, #f7f7f7) 0%, var(--ash-gray, #aabbb2) 100%);
  }

  .content {
    width: 100%;
    max-width: 400px;
    padding: 3rem 2.5rem;
    background: var(--seasalt, #f7f7f7);
    border-radius: 20px;
    box-shadow: 
      0 20px 40px rgba(62, 93, 75, 0.1),
      0 10px 20px rgba(62, 93, 75, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(62, 93, 75, 0.1);
    backdrop-filter: blur(10px);
  }

  .content .text {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    color: var(--hunter-green, #3c5d4b);
    text-align: center;
    letter-spacing: -0.02em;
  }

  .field {
    height: 60px;
    width: 100%;
    display: flex;
    position: relative;
    margin-bottom: 1.5rem;
  }

  .field .input {
    height: 100%;
    width: 100%;
    padding: 0 1rem 0 3.5rem;
    outline: none;
    border: 2px solid transparent;
    font-size: 1rem;
    background: var(--seasalt, #f7f7f7);
    color: var(--eerie-black, #1e1e1e);
    border-radius: 15px;
    transition: all 0.3s ease;
    box-shadow: 
      inset 0 2px 8px rgba(62, 93, 75, 0.1),
      0 2px 4px rgba(62, 93, 75, 0.05);
  }

  .field .input:focus {
    border-color: var(--sky-blue, #6cc9dd);
    box-shadow: 
      inset 0 2px 8px rgba(108, 201, 221, 0.2),
      0 0 0 3px rgba(108, 201, 221, 0.1),
      0 4px 12px rgba(62, 93, 75, 0.1);
    transform: translateY(-1px);
  }

  .field .input.error {
    border-color: #e74c3c;
    box-shadow: 
      inset 0 2px 8px rgba(231, 76, 60, 0.2),
      0 0 0 3px rgba(231, 76, 60, 0.1);
  }

  .field .input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .field .span {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--ash-gray, #aabbb2);
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s ease;
    z-index: 1;
  }

  .field .input:focus ~ .span {
    color: var(--sky-blue, #6cc9dd);
  }

  .field .input.error ~ .span {
    color: #e74c3c;
  }

  .field .label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3.5rem;
    pointer-events: none;
    color: var(--ash-gray, #aabbb2);
    font-size: 1rem;
    transition: all 0.3s ease;
    background: var(--seasalt, #f7f7f7);
    padding: 0 0.5rem;
  }

  .field .input:focus ~ .label,
  .field .input:valid ~ .label {
    top: 0;
    left: 1rem;
    font-size: 0.75rem;
    color: var(--sky-blue, #6cc9dd);
    transform: translateY(-50%);
  }

  .field .input.error:focus ~ .label,
  .field .input.error:valid ~ .label {
    color: #e74c3c;
  }

  .error-message {
    position: absolute;
    bottom: -1.5rem;
    left: 1rem;
    color: #e74c3c;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .forgot-pass {
    text-align: right;
    margin: 1rem 0 1.5rem 0;
  }

  .forgot-pass a {
    font-size: 0.875rem;
    color: var(--hunter-green, #3c5d4b);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .forgot-pass a:hover {
    color: var(--sky-blue, #6cc9dd);
    text-decoration: underline;
  }

  .button {
    margin: 1.5rem 0;
    width: 100%;
    height: 55px;
    font-size: 1.1rem;
    font-weight: 600;
    background: linear-gradient(135deg, var(--hunter-green, #3c5d4b) 0%, var(--sky-blue, #6cc9dd) 100%);
    border-radius: 15px;
    border: none;
    outline: none;
    cursor: pointer;
    color: var(--seasalt, #f7f7f7);
    transition: all 0.3s ease;
    box-shadow: 
      0 8px 20px rgba(62, 93, 75, 0.3),
      0 4px 8px rgba(62, 93, 75, 0.2);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none !important;
  }

  .button:not(:disabled)::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  .button:not(:disabled):hover::before {
    left: 100%;
  }

  .button:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 
      0 12px 30px rgba(62, 93, 75, 0.4),
      0 6px 12px rgba(62, 93, 75, 0.3);
  }

  .button:not(:disabled):active {
    transform: translateY(0);
    box-shadow: 
      0 4px 15px rgba(62, 93, 75, 0.3),
      0 2px 6px rgba(62, 93, 75, 0.2);
  }

  .loading {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .spinner {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: 768px) {
    .signin-container {
      padding: 1rem;
      min-height: calc(100vh - 160px);
    }

    .content {
      padding: 2rem 1.5rem;
      max-width: 350px;
    }

    .content .text {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .field {
      height: 55px;
      margin-bottom: 1.25rem;
    }

    .field .input {
      font-size: 0.95rem;
    }

    .button {
      height: 50px;
      font-size: 1rem;
    }
  }

  /* Toast Customization */
  .Toastify__toast--success {
    background: linear-gradient(135deg, var(--hunter-green, #3c5d4b), var(--sky-blue, #6cc9dd));
  }

  .Toastify__toast--error {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
  }
`;

export default SignIn;
