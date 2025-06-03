import React from 'react';
import { useAuth } from '../../context/AuthContext';
import AdminLayout from '../../components/AdminLayout';
import styled from 'styled-components';

const Profile = () => {
  const { user } = useAuth();

  return (
    <AdminLayout>
      <StyledWrapper>
        <div className="profile-container">
          <div className="header">
            <h1>Admin Profile Management</h1>
          </div>
          
          <div className="profile-content">
            <div className="profile-card">
              <div className="profile-info">
                <div className="avatar-large">
                  <span className="avatar-text">
                    {user?.email?.charAt(0).toUpperCase() || 'A'}
                  </span>
                </div>
                <div className="user-details">
                  <h2>Admin User</h2>
                  <p className="email">{user?.email}</p>
                  <span className="role-badge">Administrator</span>
                </div>
              </div>
              
              <div className="profile-form">
                <h3>Profile Settings</h3>
                <form>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      value={user?.email || ''} 
                      readOnly 
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Display Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter display name" 
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Bio</label>
                    <textarea 
                      placeholder="Enter your bio" 
                      className="form-textarea"
                      rows="4"
                    ></textarea>
                  </div>
                  
                  <div className="form-actions">
                    <button type="submit" className="save-btn">Save Changes</button>
                    <button type="button" className="cancel-btn">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="security-card">
              <h3>Security Settings</h3>
              <div className="security-actions">
                <button className="security-btn">Change Password</button>
                <button className="security-btn">Two-Factor Authentication</button>
                <button className="security-btn">Login History</button>
              </div>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </AdminLayout>
  );
};

const StyledWrapper = styled.div`
  .profile-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  .header {
    margin-bottom: 2rem;
    padding: 1.5rem 0;
    border-bottom: 2px solid var(--hunter-green, #3c5d4b);
  }

  .header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--hunter-green, #3c5d4b);
    margin: 0;
  }

  .profile-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .profile-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(62, 93, 75, 0.1);
    border: 1px solid rgba(62, 93, 75, 0.1);
  }

  .profile-info {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(170, 187, 178, 0.3);
  }

  .avatar-large {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: var(--sky-blue, #6cc9dd);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .avatar-text {
    color: var(--seasalt, #f7f7f7);
    font-weight: 700;
    font-size: 1.5rem;
  }

  .user-details h2 {
    color: var(--hunter-green, #3c5d4b);
    margin: 0 0 0.5rem 0;
    font-size: 1.5rem;
  }

  .email {
    color: var(--ash-gray, #aabbb2);
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
  }

  .role-badge {
    background: var(--hunter-green, #3c5d4b);
    color: var(--seasalt, #f7f7f7);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .profile-form h3 {
    color: var(--hunter-green, #3c5d4b);
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--hunter-green, #3c5d4b);
    font-weight: 500;
  }

  .form-input, .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid rgba(170, 187, 178, 0.5);
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    background: white;
  }

  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: var(--sky-blue, #6cc9dd);
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  .save-btn, .cancel-btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .save-btn {
    background: var(--hunter-green, #3c5d4b);
    color: var(--seasalt, #f7f7f7);
  }

  .save-btn:hover {
    background: var(--sky-blue, #6cc9dd);
  }

  .cancel-btn {
    background: var(--ash-gray, #aabbb2);
    color: var(--seasalt, #f7f7f7);
  }

  .cancel-btn:hover {
    background: #9aa9a0;
  }

  .save-btn:hover, .cancel-btn:hover {
    transform: translateY(-1px);
  }

  .security-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(62, 93, 75, 0.1);
    border: 1px solid rgba(62, 93, 75, 0.1);
  }

  .security-card h3 {
    color: var(--hunter-green, #3c5d4b);
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }

  .security-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .security-btn {
    background: var(--sky-blue, #6cc9dd);
    color: var(--seasalt, #f7f7f7);
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
  }

  .security-btn:hover {
    background: var(--hunter-green, #3c5d4b);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .header h1 {
      font-size: 2rem;
    }

    .profile-info {
      flex-direction: column;
      text-align: center;
    }

    .form-actions {
      flex-direction: column;
    }
  }
`;

export default Profile;