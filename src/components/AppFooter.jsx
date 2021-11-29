import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

export default function AppFooter() {
  return (
    <AppBar
      component="footer"
      className="AppFooter"
      position="static"
      color="primary"
      sx={{ top: 'auto', bottom: 0 }}
    >
      <Toolbar>
      </Toolbar>
    </AppBar>
  );
}
