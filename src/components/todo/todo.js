import React, {useState,useContext} from 'react';
import {useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ServiceContext from '../serviceContext';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { addToDo,addSearch } from '../../actions/actions';
import TodoItem from './todo-item';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      
    },
  },
}));

export default function Todo() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const service = useContext(ServiceContext);
  const data = useSelector(state => state.todo);

  const [text,setText] = useState("")
  const handlerSubmit = (e) => {
      e.preventDefault()
      
      service.getLocation(text)
        .then(res => dispatch(addToDo(res.results)))
      setText("")

  }

  const handlerChange = (e) => {
      e.preventDefault()
      
      setText(e.target.value)
      service.getLocation(e.target.value)
        .then(res => dispatch(addSearch(res.results)))
        .catch(error => dispatch(addSearch([{name: "error"}])))
  }

  const onSelectTag = (e, value) => {
    setText(value.name)
  }
  

  return (
      <>
      <Grid container 
      direction="column"
      justifyContent="center"
      alignItems="center" >
          
        <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => {handlerSubmit(e)}}>
        
        <Autocomplete
            onChange={(e,v)=>onSelectTag(e,v)} 
        id="combo-box-demo"
        options={data.dataForSearch}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={
            (params) =>{ 
                
                
                return (<TextField {...params} label="Input name some Episode"  variant="outlined" onChange={(e) =>{handlerChange(e)}}  />)}}
        />
                

        <div>
            <Button type="submit">Add to the List</Button>
        </div>
        </form>
        
        
    </Grid>
    <Grid container justifyContent="center">
        <div>
           <TodoItem/>
        </div>
    </Grid>
    </>
  );
}
