import {React,useState,useEffect} from 'react';
import Header from '../component/header';
import Toolbar from '../component/tools';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import DeleteModal from '../component/deletemodal';
import InsertModal from '../component/insertmodal';
import UpdateModal from '../component/updatemodal';
import SearchAppBar from '../component/searchbar';
import axios from 'axios';



export default function Member(state) {
  const columns = [
    { field: 'id', headerName: 'ID', width: 270 },
    { field: 'firstname', headerName: 'First name', width: 130 },
    { field: 'lastname', headerName: 'Last name', width: 130 },
    {
      field: 'fullname',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstname || ''} ${params.row.lastname || ''}`,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 150,
    },
   
    { 
      field:'address',
      headerName:"Address",
      width:300
    }
  ];
  
  const rows = [
    
  ];
    const [modal,setModal]=useState(null);
    const [tableData,setData] = useState([])

    const [input,setInput] = useState("")
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
    useEffect(()=>{
      axios.get("http://localhost:3001/member").then((response) =>{
      response.data.forEach((item)=>{
        rows.push(item)
        setData(rows)
      })
      
      }).catch((error) =>{})},[])

      useEffect(()=>{
        axios.get("http://localhost:3001/member").then((response) =>{
        response.data.forEach((item)=>{
          rows.push(item)
          setData(rows)
        })
       
        }).catch((error) =>{})},[modal])


        const Tabletoolbar =  () =>{
          return (
            <div style={{display: 'flex',marginTop: '10px'}}>
              <GridToolbar/>
              <SearchAppBar tableData={tableData} setData={setData} input={input} setInput={setInput} source="memberh"/>
            </div>
        
          )
        }

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
                rows={tableData}
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