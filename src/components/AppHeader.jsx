import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';


export default function AppHeader(props) {
  const [open, setOpen] = useState(false);
  const menu = useRef(null);

  return (
    <AppBar className="AppHeader" position="fixed" color="primary">
      <Toolbar>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton sx={{ marginRight: '1rem' }} ref={menu} onClick={() => setOpen(!open)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Menu
          open={open}
          onClick={() => setOpen(!open)}
          anchorEl={menu.current}
        >
          <MenuItem>
            <Typography component="a" href="#services">Services</Typography>
          </MenuItem>
          <MenuItem>
            <Typography component="a" href="#team">Team</Typography>
          </MenuItem>
          <MenuItem>
            <Typography component="a" href="#contacts">Contact Us</Typography>
          </MenuItem>
        </Menu>
        <Typography variant="h6">
          {props.title}
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '1rem' }} ml="auto">
          <Button component="a" href="#services" variant="text" color="inherit">Services</Button>
          <Button component="a" href="#team" variant="text" color="inherit">Team</Button>
          <Button component="a" href="#contacts" variant="text" color="inherit">Contact Us</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

AppHeader.propTypes = {
  title: PropTypes.string,
};
