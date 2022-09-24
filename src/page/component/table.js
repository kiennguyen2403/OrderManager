import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {React,useEffect} from 'react';
export default function Table(props){
    const {rows,columns} = props;
    useEffect(() =>{
        console.log(rows)
    },[columns,rows])
    return (
        <div style={{ height: 625, width: '100%' }}>
        <DataGrid 
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
        </div>
    )
}