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
  const [input,setInput] = useState("")
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
  
  useEffect(() =>{
    axios.get("http://localhost:3001/order").then((response) =>{
      response.data.forEach((item) =>{
        rows.push(item)
        setData(rows)
    })
    const mergeData = []
    const returnData = []
    tableData.forEach((item) => {
      const newitem = item.phone+item.order+item.adress+item.time+item.id
      mergeData.push(newitem);
    })
    mergeData.forEach((item)=>{
      if (item.includes(input)){
        const index = mergeData.indexOf(item)
        returnData.push(tableData[index])
      }
    })
    setData(returnData)
    }).catch((error) =>{})
    },[input])
  const Tabletoolbar =  () =>{
    return (
      <div style={{display: 'flex',marginTop: '10px'}}>
        <GridToolbar/>
        <SearchAppBar tableData={tableData} setData={setData} input={input} setInput={setInput} source="order"/>
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

