import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const AdminSidebar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Projects Management', path: '/admin/projects', icon: '🚀' },
    { name: 'Admin Profile', path: '/admin/profile', icon: '👤' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <StyledWrapper>
      <div className="sidebar-container">
        <div className="sidebar-content">
          <div className="logo-section">
            <span className="logo">
              Admin Panel
            </span>
          </div>

          <nav className="navigation">
            <ul className="nav-list">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <button
                    onClick={() => navigate(item.path)}
                    className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-text">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="settings-section">
            <details className="dropdown">
              <summary className="dropdown-trigger">
                <span className="dropdown-text">Settings</span>
                <span className="dropdown-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="arrow-icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item">
                    Site Settings
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    Security
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleLogout}
                    className="dropdown-item logout"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </details>
          </div>
        </div>

        <div className="user-profile">
          <div className="profile-info">
            <div className="avatar">
              <span className="avatar-text">
                {user?.email?.charAt(0).toUpperCase() || 'A'}
              </span>
            </div>
            <div className="user-details">
              <p className="user-name">Admin User</p>
              <p className="user-email">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .sidebar-container {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid rgba(170, 187, 178, 0.3);
    background: var(--seasalt, #f7f7f7);
    width: 280px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
  }

  .sidebar-content {
    padding: 1.5rem 1rem;
    flex: 1;
  }

  .logo-section {
    margin-bottom: 2rem;
  }

  .logo {
    display: grid;
    height: 3rem;
    width: 100%;
    place-content: center;
    border-radius: 12px;
    background: var(--hunter-green, #3c5d4b);
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--seasalt, #f7f7f7);
    text-align: center;
    box-shadow: 0 4px 12px rgba(62, 93, 75, 0.2);
  }

  .navigation {
    margin-top: 1.5rem;
  }

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .nav-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    border: none;
    background: none;
    border-radius: 12px;
    padding: 0.875rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--ash-gray, #aabbb2);
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
  }

  .nav-item:hover {
    background: rgba(108, 201, 221, 0.1);
    color: var(--hunter-green, #3c5d4b);
    transform: translateX(4px);
  }

  .nav-item.active {
    background: var(--hunter-green, #3c5d4b);
    color: var(--seasalt, #f7f7f7);
    box-shadow: 0 4px 12px rgba(62, 93, 75, 0.3);
  }

  .nav-icon {
    font-size: 1.2rem;
    min-width: 1.5rem;
  }

  .nav-text {
    flex: 1;
  }

  .settings-section {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(170, 187, 178, 0.3);
  }

  .dropdown {
    position: relative;
  }

  .dropdown[open] .dropdown-arrow {
    transform: rotate(-180deg);
  }

  .dropdown-trigger {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    padding: 0.875rem 1rem;
    color: var(--ash-gray, #aabbb2);
    background: none;
    border: none;
    width: 100%;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;
    list-style: none;
  }

  .dropdown-trigger::-webkit-details-marker {
    display: none;
  }

  .dropdown-trigger:hover {
    background: rgba(108, 201, 221, 0.1);
    color: var(--hunter-green, #3c5d4b);
  }

  .dropdown-arrow {
    flex-shrink: 0;
    transition: transform 0.3s ease;
  }

  .arrow-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  .dropdown-menu {
    margin-top: 0.5rem;
    list-style: none;
    padding: 0;
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .dropdown-item {
    display: block;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--ash-gray, #aabbb2);
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .dropdown-item:hover {
    background: rgba(108, 201, 221, 0.1);
    color: var(--hunter-green, #3c5d4b);
  }

  .dropdown-item.logout {
    color: #e74c3c;
  }

  .dropdown-item.logout:hover {
    background: rgba(231, 76, 60, 0.1);
    color: #c0392b;
  }

  .user-profile {
    position: sticky;
    bottom: 0;
    border-top: 1px solid rgba(170, 187, 178, 0.3);
    background: var(--seasalt, #f7f7f7);
  }

  .profile-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: var(--seasalt, #f7f7f7);
    padding: 1rem;
    transition: background-color 0.3s ease;
  }

  .profile-info:hover {
    background: rgba(108, 201, 221, 0.1);
  }

  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: var(--sky-blue, #6cc9dd);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .avatar-text {
    color: var(--seasalt, #f7f7f7);
    font-weight: 600;
    font-size: 1rem;
  }

  .user-details {
    flex: 1;
    min-width: 0;
  }

  .user-name {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--hunter-green, #3c5d4b);
    margin: 0 0 0.25rem 0;
  }

  .user-email {
    font-size: 0.75rem;
    color: var(--ash-gray, #aabbb2);
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    .sidebar-container {
      width: 100%;
      position: relative;
      height: auto;
    }
  }
`;

export default AdminSidebar; 