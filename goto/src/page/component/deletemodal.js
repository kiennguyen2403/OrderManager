import {React,useState,useEffect} from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

export default function DeleteModal(props) {
    const {functionality,setModal} = props;
    const [isVisible,setVisible] = useState(false)
    const [id, setID] = useState("")
    const [phone, setPhone] = useState("")



    const deleteOrder = (id) =>{
        axios.delete("http://localhost:3001/order/"+id)
        .then(() =>{
            alert("Delete success")
            setVisible(false); setModal(null);
        })
        .catch((error)=>{alert(error.message)})
    }

    const deleteMember = (phone) =>{
        axios.delete("http://localhost:3001/member/"+phone)
        .then(() =>{
            alert("Delete success")
            setVisible(false); setModal(null);
        })
        .catch((error)=>{alert(error.message)})
        
    }
    
    useEffect(() =>{
        setVisible(true)
    },[])
    if (functionality === "member")
    {
        return (
        <Modal
        open={isVisible}
        onClose={setVisible}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
         >
            <div className="modal">
                <div id="closeButton"> 
                    <IconButton aria-label="close" onClick={()=>{setVisible(false); setModal(null);}}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <div>
                    <h2>Delete existing member</h2>
                </div>
                <div className="modalQuaey">
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    id="textFieldInput"
                    >
                        <TextField id="Phone" label="Phone" variant="filled" onChange={(value)=>{setPhone(value.target.value);}}/>
                    </Box>
                </div>
                <div id="executeButton">
                    <Button variant="contained" endIcon={<DeleteIcon />} color="error" onClick={()=>{deleteMember(phone)}}>
                        Delete
                    </Button>
                </div>
            </div>
        </Modal>
        )
    }
    else if (functionality === "order")
    { 
        return (
            <Modal
            open={isVisible}
            onClose={setVisible}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
             >
            <div className="modal">
                <div>
                    <h2>Delete existing order</h2>
                </div>
                <div id="closeButton"> 
                    <IconButton aria-label="close" onClick={()=>{setVisible(false); setModal(null);}}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <div className="modalQuaey">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    id="textFieldInput"
                    >
                        <TextField id="ID" label="ID" variant="filled" onChange={(value)=>{setID(value.target.value);}}/>
                    </Box>
                </div>
                <div id="executeButton">
                    <Button variant="contained" endIcon={<DeleteIcon />} color="error" onClick={()=>{deleteOrder(id)}}>
                        Delete
                    </Button>
                </div>
            </div>
            </Modal>
        )
    }
}