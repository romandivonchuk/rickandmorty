import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {useSelector,useDispatch} from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { setFilter } from '../../actions/actions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function FilterItem(props) {

  const classes = useStyles(); 
  const dispatch = useDispatch();
  
    
 
  const filterData = useSelector(state=> state.filter)
  
  let selectValue = props.filter === filterData.name ? filterData.value : ""

  const handleChange = (event) => {
    dispatch(setFilter(props.filter, event.target.value));
  };

  if (!filterData.loading) {
    return (
    
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{props.filter}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValue}
          onChange={handleChange}
        >
            
          <MenuItem value={''}>None</MenuItem>
          {filterData.data[props.filter].map((item,idx) => <MenuItem key={idx} value={item}>{item}</MenuItem>)}
          
          
        </Select>
      </FormControl>

    );
  } else {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{props.filter}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValue}
          onChange={handleChange}
        >
          <MenuItem value={''}>...Loading</MenuItem>
          
        </Select>
      </FormControl>
    )
    
  }
  
}