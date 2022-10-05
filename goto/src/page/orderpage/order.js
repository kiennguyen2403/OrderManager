import {React,useState,useEffect} from 'react';
import Header from '../component/header';
import Toolbar from '../component/tools';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import DeleteModal from '../component/deletemodal';
import InsertModal from '../component/insertmodal';
import UpdateModal from '../component/updatemodal';
import SearchAppBar from '../component/searchbar';
import axios from 'axios';




export default function Order () {
  const [modal,setModal]=useState(null);
  const [tableData,setData] = useState([])
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
  { field: 'id', headerName: 'ID', width: 270 },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 160,
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
    width:320,
  },

];

const rows = [
 
];

useEffect(() =>{
axios.get("http://localhost:3001/order").then((response) =>{
  response.data.forEach((item) =>{
    rows.push(item)
    setData(rows)
})
}).catch((error) =>{})
},[])

useEffect(() =>{
  axios.get("http://localhost:3001/order").then((response) =>{
    response.data.forEach((item) =>{
      rows.push(item)
      setData(rows)
  })
  }).catch((error) =>{})
  },[modal])

  const Tabletoolbar =  () =>{
    return (
      <div style={{display: 'flex',marginTop: '10px'}}>
        <GridToolbar/>
        <SearchAppBar tableData= {tableData} setdata={setData}/>
      </div>
  
    )
  }
return (
    <div> 
        <Header/>
        <div id="orderPage">
        <Toolbar setModal={setModal}/>
        <div style={{ height: 625, width: '100%' }}>
            <DataGrid 
              rows={tableData}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              checkboxSelection
              components={{ Toolbar: Tabletoolbar }}
            />
            </div>
        </div>
        {
          renderModel()
        }
    </div>
)
    
}

