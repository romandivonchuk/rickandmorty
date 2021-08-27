import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import {useSelector, useDispatch } from 'react-redux';
import { deleteToDo, chekedToDo } from '../../actions/actions';
import "./index.css"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "1000px",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));



export default function TodoItem() {
  const classes = useStyles();
  
  const dispatch = useDispatch()
  const data = useSelector(state => state.todo)
  useEffect(() => {
    console.log("USEEFFECT")
    const serializedData = JSON.stringify(data.data);
    localStorage.setItem('data', serializedData);
  }, [data.data])

  const handleOnClick = (id) => {
    dispatch(deleteToDo(id))
  }  
  const handleCheckBox = (id) => {
    dispatch(chekedToDo(id))
  } 
   
  if (data.data.length === 0) {
    return (<h2>you have not wishes yet, pick someone</h2>)
  } else {
    return (
      <div className={classes.root}>
        
        
          
        
          
            
            <div className={classes.demo}>
              <List>
               
                 
                    {data.data.map((item,idx)=> {
                        return (
                          <ListItem key={idx}>
                          <ListItemText
                            primary={item.name}
                            
                          />
                          <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => {handleOnClick(idx)}}>
                              <DeleteIcon />
                            </IconButton>
                            <Checkbox edge="end" checked={item.checked !== undefined ? item.checked : false} onClick={() => {handleCheckBox(idx)}}/>
                          </ListItemSecondaryAction>
                        </ListItem>
                        )
                    })}
                  
               
              </List>
            </div>
          
      </div>
    );
  }
  
  
}