import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {useDispatch,useSelector } from 'react-redux';
import { setCategory } from '../../actions/actions';
import './header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  
  appbar: {
    alignItems: 'center',
    background: 'black'
  },

  toolbar: {
    width: '700px',
    justifyContent: "space-between",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  btn: {
    border: "1px solid #212e82"
  },

  title: {
    flexGrow: 1,
  },

}));



export default function Header() {
  
  const classes = useStyles();
  const arrBtn = ["Characters", "Episodes", "Locations", "My watch list"];
  const dispatch = useDispatch()
  const category = useSelector(state=> state.category)
  

  const handleChange = (item) => {
      dispatch(setCategory(item));
    };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          {arrBtn.map((item, idx) => {
            return (
              <Button key={idx} onClick={() => handleChange(item)} className={category === item ? classes.btn : ""} variant="outlined" color={"inherit"} >
                  {item}
              </Button>
            )
          })}
          
        </Toolbar>
      </AppBar>
    </div>
  );
}