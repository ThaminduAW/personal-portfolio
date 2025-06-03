import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <StyledWrapper>
      <div className="dashboard-container">
        <div className="dashboard-content">
          <div className="header">
            <h1>Admin Dashboard</h1>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
          
          <div className="welcome-section">
            <h2>Welcome back, Admin!</h2>
            <p>Logged in as: <span className="email">{user?.email}</span></p>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <h3>Portfolio Views</h3>
              <p className="stat-number">1,234</p>
            </div>
            <div className="stat-card">
              <h3>Contact Messages</h3>
              <p className="stat-number">45</p>
            </div>
            <div className="stat-card">
              <h3>Projects</h3>
              <p className="stat-number">12</p>
            </div>
            <div className="stat-card">
              <h3>Admin Sessions</h3>
              <p className="stat-number">8</p>
            </div>
          </div>

          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <div className="actions-grid">
              <button className="action-btn">Manage Projects</button>
              <button className="action-btn">View Messages</button>
              <button className="action-btn">Update Resume</button>
              <button className="action-btn">Site Settings</button>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .dashboard-container {
    min-height: calc(100vh - 200px);
    padding: 2rem;
    background: linear-gradient(135deg, var(--seasalt, #f7f7f7) 0%, var(--ash-gray, #aabbb2) 100%);
  }

  .dashboard-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

  .logout-btn {
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(231, 76, 60, 0.3);
  }

  .logout-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(231, 76, 60, 0.4);
  }

  .welcome-section {
    background: var(--seasalt, #f7f7f7);
    padding: 2rem;
    border-radius: 15px;
    margin-bottom: 2rem;
    box-shadow: 0 8px 20px rgba(62, 93, 75, 0.1);
    border: 1px solid rgba(62, 93, 75, 0.1);
  }

  .welcome-section h2 {
    font-size: 1.8rem;
    color: var(--hunter-green, #3c5d4b);
    margin-bottom: 0.5rem;
  }

  .welcome-section p {
    color: var(--ash-gray, #aabbb2);
    font-size: 1.1rem;
  }

  .email {
    color: var(--sky-blue, #6cc9dd);
    font-weight: 600;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: var(--seasalt, #f7f7f7);
    padding: 1.5rem;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 8px 20px rgba(62, 93, 75, 0.1);
    border: 1px solid rgba(62, 93, 75, 0.1);
    transition: transform 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
  }

  .stat-card h3 {
    color: var(--hunter-green, #3c5d4b);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--sky-blue, #6cc9dd);
    margin: 0;
  }

  .quick-actions {
    background: var(--seasalt, #f7f7f7);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(62, 93, 75, 0.1);
    border: 1px solid rgba(62, 93, 75, 0.1);
  }

  .quick-actions h3 {
    color: var(--hunter-green, #3c5d4b);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .actions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .action-btn {
    background: linear-gradient(135deg, var(--hunter-green, #3c5d4b) 0%, var(--sky-blue, #6cc9dd) 100%);
    color: var(--seasalt, #f7f7f7);
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(62, 93, 75, 0.3);
  }

  .action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(62, 93, 75, 0.4);
  }

  @media (max-width: 768px) {
    .dashboard-container {
      padding: 1rem;
    }

    .header {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    .header h1 {
      font-size: 2rem;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .actions-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Dashboard; 