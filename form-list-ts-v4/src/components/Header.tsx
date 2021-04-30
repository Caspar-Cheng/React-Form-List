import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Header: React.FC = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link to="/todo">todo</Link>
          </Button>
          <Button color="inherit">
            <Link to="/about">about</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
