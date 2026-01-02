import React from 'react';
import { Sidebar, Drawer } from './';
import { Button, Tooltip } from './';
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
            <Tooltip>
              Tooltip content
            </Tooltip>
          </Button>
        </div>
        <div className="layout-main">
          {children}
        </div>
      </div>
      <Drawer />
    </div>
  );
};

export default Layout;
