import Header from './components/header'
import React , { useEffect, useContext } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import  ServiceContext  from './components/serviceContext';
import Pages from './components/pages'

import { dataRequested , dataLoaded, dataError,  handleDataForFilters,addToDo } from './actions/actions'



function App() {
  const dispatch = useDispatch()
  const service = useContext(ServiceContext);
  const data = useSelector(state=>state.data)
  const page = useSelector(state=>state.page)
  const filter = useSelector(state=>state.filter)
  const category = useSelector(state=>state.category)

  

  useEffect(() => {

    dispatch(dataRequested())
    if (filter.name === "" && category !== "My watch list") {
      service.getData(category,page)
        .then((data) => dispatch(dataLoaded(data)))
        .catch((err) => dispatch(dataError(err)))
    } else {
      service.getCharacterFilter(filter,page)
        .then((data) => dispatch(dataLoaded(data)))
        .catch((err) => dispatch(dataError(err)))
    }
    
  },[page,filter.value,category])

  useEffect(() => {
    service.getDataForFilters()
    .then(res => dispatch(handleDataForFilters(res)))
    
    if (JSON.parse(localStorage.getItem('data'))!== null) {
      dispatch(addToDo(JSON.parse(localStorage.getItem('data'))))
    }
    
  },[]);

  

  

  if (data.error) {

    return <h1>error</h1>

  } else {
    
    return (
      <div className="App">
        <Header/>
        <Pages/>
      </div>
    );
  }

  
}

export default App;
