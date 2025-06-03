import React from 'react';
import AdminLayout from '../../components/AdminLayout';
import styled from 'styled-components';

const AdminProjects = () => {
  return (
    <AdminLayout>
      <StyledWrapper>
        <div className="projects-container">
          <div className="header">
            <h1>Projects Management</h1>
            <button className="add-project-btn">+ Add New Project</button>
          </div>
          
          <div className="projects-content">
            <div className="projects-grid">
              <div className="project-card">
                <h3>Project 1</h3>
                <p>Sample project description</p>
                <div className="project-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
              
              <div className="project-card">
                <h3>Project 2</h3>
                <p>Another project description</p>
                <div className="project-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledWrapper>
    </AdminLayout>
  );
};

const StyledWrapper = styled.div`
  .projects-container {
    width: 100%;
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

  .add-project-btn {
    background: var(--hunter-green, #3c5d4b);
    color: var(--seasalt, #f7f7f7);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(62, 93, 75, 0.3);
  }

  .add-project-btn:hover {
    background: var(--sky-blue, #6cc9dd);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(62, 93, 75, 0.4);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .project-card {
    background: white;
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(62, 93, 75, 0.1);
    border: 1px solid rgba(62, 93, 75, 0.1);
    transition: transform 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
  }

  .project-card h3 {
    color: var(--hunter-green, #3c5d4b);
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .project-card p {
    color: var(--ash-gray, #aabbb2);
    margin-bottom: 1rem;
  }

  .project-actions {
    display: flex;
    gap: 0.5rem;
  }

  .edit-btn, .delete-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .edit-btn {
    background: var(--sky-blue, #6cc9dd);
    color: var(--seasalt, #f7f7f7);
  }

  .edit-btn:hover {
    background: var(--hunter-green, #3c5d4b);
  }

  .delete-btn {
    background: #e74c3c;
    color: white;
  }

  .delete-btn:hover {
    background: #c0392b;
  }

  .edit-btn:hover, .delete-btn:hover {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }

    .header h1 {
      font-size: 2rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default AdminProjects;