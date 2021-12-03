import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function ServiceCard(props) {
  return (
    <Card sx={{ width: 420 }}>
      <CardMedia
        component="img"
        sx={{ height: 230 }}
        image={props.image}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.desc ?? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi nostrum aperiam reprehenderit ea suscipit optio odit? Veritatis, veniam eligendi?'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
};
