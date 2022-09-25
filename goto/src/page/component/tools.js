import {React,useState,useEffect} from "react";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';

export default function Toolbar(props) {
    const {setModal} = props;
    return(
        <div id="toolBar">
        <FormGroup>
            <div className = "tools toolBarSelection">
                <Button variant="contained" color="grey"  startIcon={<AddIcon color="grey"/>} onClick={()=>{setModal('insert')}}>
                    <p>New record</p>
                </Button>
            </div>
            <div className = "tools toolBarSelection">
                <Button variant="contained" color="grey"  startIcon={<DeleteIcon color="grey"/>} onClick={()=>{setModal('delete')}}>
                    <p>Delete record</p>
                </Button>
            </div>
            <div className = "tools toolBarSelection">
                <Button variant="contained" color="grey"  startIcon={<UpdateIcon color="grey"/>} onClick={()=>{setModal('update')}}>
                    <p>Update record</p>
                </Button>
            </div>
            <div className = "tools toolBarSelection">
                <Button variant="contained" color="grey"  startIcon={<ImportExportIcon color="grey"/>}>
                    <p>Export data</p>
                </Button>
            </div>
            <div className =" tools toolBarSelection">
                <FormControlLabel label="Notification" control={<Switch defaultChecked />}  />
            </div>
            <div className = "tools toolBarSelection">
                <FormControlLabel label="Show details" control={<Switch />}  />
            </div>
        </FormGroup>
        
        </div>
    )
}

