import {React,useState,useEffect} from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import axios from "axios";
import { Alert } from "@mui/material";

export default function InsertModal(props) {
    const {functionality,setModal} = props;
    const [isVisible,setVisible] = useState(false);
    const [phone, setPhone] = useState("")
    const [order, setOrder] = useState("")
    const [address, setAddress] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")


    useEffect(() =>{
        setVisible(true)
    },[])


    const addOrder = async (phone,order,address) => {
        const newOrder = {"phone":phone, "order":order, "address":address};
        axios.post("http://localhost:3001/order",newOrder).then((response) =>{
            alert("Update success")
            setVisible(false); setModal(null);
        }).catch((error)=>{
            alert(error.message);
        })
    }


    const addMember = async (firstName,lastName,phone,address) => {
        console.log(firstName,lastName, phone,address)
        const newMember = {"firstname":firstName,"lastname":lastName, "phone":phone, "address":address};
        axios.post("http://localhost:3001/member",newMember).then((response) =>{
            alert("Update success")
            setVisible(false); setModal(null);
        }).catch((error)=>{
            alert(error.message)
        })

    }

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
                <div>
                    <h2>Add new member</h2>
                </div>
                <div id="closeButton"> 
                    <IconButton aria-label="close" onClick={()=>{setVisible(false); setModal(null);}}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <div className="modalQuery">
                    <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    id="textFieldInput"
                    >
                        <TextField id="firstName" label="First Name" variant="filled" onChange={(value)=>{setFirstname(value.target.value);}}/>
                        <TextField id="lastName" label="Last Name" variant="filled" onChange={(value)=>{setLastname(value.target.value);}}/>
                        <TextField id="Phone" label="Phone" variant="filled" onChange={(value)=>{setPhone(value.target.value);}}/>
                        <TextField id="Address" label="Address" variant="filled" onChange={(value)=>{setAddress(value.target.value);}}/>
                    </Box>
                </div>
                <div id="executeButton">
                    <Button variant="contained" endIcon={<SaveIcon />} color="success" onClick={()=>{addMember(firstname,lastname,phone,address)}}>
                        Save
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
                    <h2>Add new order</h2>
                </div>
                <div id="closeButton"> 
                    <IconButton aria-label="close" onClick={()=>{setVisible(false); setModal(null);}}>
                        <CloseIcon/>
                    </IconButton>
                </div>
                <div className="modalQuery">
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    id="textFieldInput"
                    >
                        <TextField id="Phone" label="Telephone" variant="filled" onChange={(value)=>{setPhone(value.target.value);}}/>
                        <TextField id="Address" label="Address" variant="filled" onChange={(value)=>{setAddress(value.target.value);}}/>
                        <TextField id="Order" label="Order" variant="filled" onChange={(value)=>{setOrder(value.target.value);}}/>
                    </Box>
                </div>
                <div id="executeButton">
                    <Button variant="contained" endIcon={<SaveIcon />} color="success" onClick={()=>{addOrder(phone,order, address)}}>
                        Save
                    </Button>
                </div>
            </div>
            </Modal>
        )
    }
}