import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import GitHubIcon from './GitHubIcon';

export default function TeamCard(props) {
  return (
    <Card className="TeamCard" sx={{ maxWidth: '27.5rem' }}>
      <CardHeader
        avatar={<Avatar src={props.icon} />}
        title={props.name}
        subheader={props.title}
        action={<GitHubIcon username={props.username} />}
      />
      <CardMedia
        component="img"
        image={props.project.preview}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>{props.project.title}</Typography>
        <Typography variant="body2" color="text.secondary">{props.project.desc}</Typography>
      </CardContent>
      <CardActions>
        <Button color="inherit" href={props.project.link} target="_blank">Project</Button>
        <Button color="inherit" href={props.portfolio} target="_blank">Portfolio</Button>
      </CardActions>
    </Card>
  );
}

TeamCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  portfolio: PropTypes.string.isRequired,
};
