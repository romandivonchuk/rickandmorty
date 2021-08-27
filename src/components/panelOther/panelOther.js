import React from 'react'
import {useSelector} from 'react-redux'
import { DataGrid } from '@material-ui/data-grid';

const columns = {Episodes: [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'episode',
        headerName: 'Episode',
        width: 150,
        editable: true,
    },
    {
        field: 'air_date',
        headerName: 'air date',
        width: 150,
        editable: true,
    },
    {
        field: 'created',
        headerName: 'Created',
        type: "number",
        width: 200,
    }
],
Locations: [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 150,
            editable: true,
        },
        {
            field: 'dimension',
            headerName: 'Dimension',
            width: 150,
            editable: true,
        },
        {
            field: 'residents',
            headerName: 'Dimension',
            width: 150,
            editable: true,
        },
        {
            field: 'created',
            headerName: 'Created',
            type: "number",
            width: 200,
        }]
    
};

  
  
const PanelOther = () => {
    const data = useSelector(state=>state.data.dataPages.results)
    const category = useSelector(state=>state.category)
    return (
        <div style={{maxWidth: "1000px", margin:"0 auto"}}>
        <DataGrid
        align="center"
        autoHeight={true}
        hideFooterPagination={true}
        rows={data}
        columns={columns[category]}
        pageSize={20}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
    )
}

export default PanelOther


