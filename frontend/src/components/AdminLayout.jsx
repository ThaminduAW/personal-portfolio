import React from 'react';
import AdminSidebar from './AdminSidebar';
import styled from 'styled-components';

const AdminLayout = ({ children }) => {
  return (
    <StyledWrapper>
      <AdminSidebar />
      <div className="main-content">
        {children}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: var(--seasalt, #f7f7f7);

  .main-content {
    flex: 1;
    margin-left: 280px;
    padding: 2rem;
    overflow-x: auto;
    background: var(--seasalt, #f7f7f7);
    min-height: 100vh;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
    .main-content {
      margin-left: 0;
      padding: 1rem;
    }
  }
`;

export default AdminLayout; 