import React from 'react'
import {useSelector,useDispatch } from 'react-redux'
import PageController from './pageController';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import { setPage } from '../../actions/actions'
import "./index.css"
const useStyles = makeStyles((theme) => ({

    root: {
     "& > *": {
       marginTop: theme.spacing(4),
       justifyContent:"center",
       display:'flex',
       marginBottom: theme.spacing(4),
   
     }
   },
   display: {
    "& > *": {
      display: "none"
  
    }
   }
   
   }));

const Pages = () => {

    const classes = useStyles();
    const data = useSelector(state=>state.data)
    const page = useSelector(state=>state.page)
    const category = useSelector(state=>state.category)
    const dispatch = useDispatch()
    
    const handleChange = (event, value) => {
        dispatch(setPage(value));
      };


    if (data.loading) {

        return <h1>Loading...</h1>

      } else if (data.error) {
    
        return <h1>error</h1>
    
      } else {

        return (
            <>
                <PageController/>
                <div className={category === "My watch list" ? "displaynone" : classes.root}>
                    <Pagination className={classes.pagination} count={data.dataPages.info.pages} page={page} onChange={handleChange} hidePrevButton hideNextButton />
                </div>
            </>
        )

      }
}

export default Pages
