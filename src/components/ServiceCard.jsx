import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

export default function ServiceCard(props) {
  return (
    <Card sx={{ maxWidth: 344 }}>
      <CardMedia
        component="img"
        sx={{ height: 220 }}
        image={props.image}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis excepturi nostrum aperiam reprehenderit ea suscipit optio odit? Veritatis, veniam eligendi?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="text">
          View More
        </Button>
      </CardActions>
    </Card>
  );
}

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
