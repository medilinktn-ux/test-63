import React from 'react';
import { Sidebar } from './sidebar';
import { Button } from './button';
import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-content">
        <div className="layout-header">
          <Button>
            Header Button
          </Button>
        </div>
        <div className="layout-main">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
