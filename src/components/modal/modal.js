import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector, useDispatch } from 'react-redux'
import { setModalClose } from '../../actions/actions'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const open = useSelector(state => state.modal.open)
  const id = useSelector(state => state.modal.id)
  const data = useSelector(state => state.data.dataPages.results)
  const dispatch = useDispatch();
  if (open) {
    

    const currentItem = data.find((elem) => elem.id === id)
    const {name, gender,image, location, species, status, episode} =currentItem

    const handleClose = () => {
      dispatch(setModalClose());
    };

    return (
      <div>
        
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <img src={image} alt={name}/>
              <h2 id="transition-modal-title">{name}</h2>
              <p id="transition-modal-description">
                gender: {gender} <br/>
                location: {location.name} <br/>
                species: {species} <br/>
                status: {status} <br/>
                number of episodes: {episode.length} <br/>
              </p>
              
              
              
            </div>
          </Fade>
        </Modal>
      </div>
    );
  } else {
    return ""
  }
  
}