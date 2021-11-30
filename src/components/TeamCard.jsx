import './TeamCard.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import PropTypes from 'prop-types';

export default function TeamCard(props) {
  return (
    <Card className="TeamCard">
      <Box sx={{ display: 'flex', flexFlow: 'column', justifyContent: 'space-between' }}>
        <CardHeader
          title={props.name}
          subheader={props.title}
        />
        <CardActions>
          <Button href={`https://github.com/${props.username}`} target="_blank">GitHub</Button>
          <Button href={`https://github.com/${props.username}`} target="_blank">Portfolio</Button>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        className="TeamCardImage"
        image={props.icon}
        sx={{ width: '10.5rem' }}
      />
    </Card>
  );
}

TeamCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  portfolio: PropTypes.string.isRequired,
};
