import GitHub from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

export default function GitHubIcon(props) {
  return <IconButton
    href={`https://github.com/${props.username}`}
    target="_blank"
    aria-label="GitHub Link"
  >
    <GitHub />
  </IconButton>;
}

GitHubIcon.propTypes = {
  username: PropTypes.string.isRequired,
};
