import './Landing.scss';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export default function LandingPage() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h1" gutterBottom>
        JIM Solutions
      </Typography>
      <Typography variant="h4">
        For all your tech needs
      </Typography>
    </Box>
  );
}
