import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function AppHeader(props) {
  return (
    <AppBar className="AppHeader" position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

AppHeader.propTypes = {
  title: PropTypes.string,
};
