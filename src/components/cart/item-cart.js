import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { setModalOpen } from '../../actions/actions'
import { useDispatch} from 'react-redux'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ItemCard(props) {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const {name,image,species,gender,status,id} = props.data
  const handlerItem = () => {
    
    dispatch(setModalOpen(id))
  }
  return (
    <Card className={classes.root} onClick={handlerItem}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
         
          <Typography variant="body2" color="textSecondary" component="p">
            species: {species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            gender: {gender}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            status: {status}
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}