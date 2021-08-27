import React from 'react'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ItemCard from '../cart'

import { useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TransitionsModal from '../modal'
import SimpleSelect from '../filters'



const useStyles = makeStyles((theme) => ({
    containerMain: {
      marginTop: "1rem",
    },
   
   }));

function Character() {
    const data = useSelector(state => state.data.dataPages.results);
    const classes = useStyles();

  
    return (
      <Container maxWidth={false} className={classes.containerMain}>
        <SimpleSelect />
        <Grid container mt={5} direction="row"
              justifyContent="center"
              alignItems="center" 
              spacing={6}>
          
        {data.map((item, idx) => (<Grid key={idx} item align="center" md={3}>
          <ItemCard data={item} />
        </Grid>))}
          
    
        </Grid>

        <TransitionsModal/>
      </Container>
    )
}

export default Character
