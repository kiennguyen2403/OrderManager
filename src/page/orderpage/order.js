import {React,useState,useEffect} from 'react';
import Header from '../component/header';
import Toolbar from '../component/tools';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteModal from '../component/deletemodal';
import InsertModal from '../component/insertmodal';
import UpdateModal from '../component/updatemodal';



export default function Order () {
  const [modal,setModal]=useState(null);
  const renderModel = () =>
  {
   switch(modal)
   {
    case 'update':
      return (<UpdateModal functionality="order" setModal={setModal}/>);
      break;
    case 'delete':
      return (<DeleteModal functionality="order" setModal={setModal}/>);
      break;
    case 'insert':
      return (<InsertModal functionality="order" setModal={setModal}/>);
      break;
    default:
      return null;
      break;

   }
  }
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { 
    field:'address',
    headerName:"Address",
    width:300
  },
  { 
    field: 'order',
    headerName: 'Order',
    width:300 
  },
  { 
    field:'time',
    headerName: 'Time',
    width:120,
  },
  { 
    field:'note',
    headerName: 'Note',
    width:200,
  }
];

const rows = [
  
];
return (
    <div> 
        <Header/>
        <div id="orderPage">
        <Toolbar setModal={setModal}/>
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
        </div>
        {
          renderModel()
        }
    </div>
)
    
}

