import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

export default function AppFooter() {
  return (
    <AppBar
      component="footer"
      className="AppFooter"
      position="static"
      sx={{ top: 'auto', bottom: 0 }}
    >
      <Toolbar>
        <Box sx={{ display: 'flex', gap: '1rem', margin: 'auto' }}>
          <IconButton>
            <GitHubIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton>
            <TwitterIcon sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton>
            <FacebookIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
