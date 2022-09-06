import {React,useState,useEffect} from 'react';
import Header from '../component/header';
import Toolbar from '../component/tools';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import DeleteModal from '../component/deletemodal';
import InsertModal from '../component/insertmodal';
import UpdateModal from '../component/updatemodal';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
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
      field: 'phone',
      headerName: 'Phone',
      width: 150,
    },
   
    { 
      field:'address',
      headerName:"Address",
      width:500
    }
  ];
  
  const rows = [
    
  ];
export default function Member(state) {
    const [modal,setModal]=useState(null);
    const renderModel = () =>
    {
     switch(modal)
     {
      case 'update':
        return (<UpdateModal functionality="member" setModal={setModal}/>);
        break;
      case 'delete':
        return (<DeleteModal functionality="member" setModal={setModal}/>);
        break;
      case 'insert':
        return (<InsertModal functionality="member" setModal={setModal}/>);
        break;
      default:
        return (
          <div/>
        );
        break;
     }
    }
    useEffect(()=>{},[modal])
    return (
        <div>
            <Header/>
            {
            renderModel()
            }
            <div id="orderPage">
            <Toolbar setModal={setModal}/>
            <div style={{ height: 625, width: '100%' }}>
              <DataGrid 
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
                components={{ Toolbar: GridToolbar  }}
              />
            </div>
        </div>
        </div>
    )
}