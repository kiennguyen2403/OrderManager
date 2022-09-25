import {React,useState,useEffect} from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import axios from "axios";

export default function UpdateModal(props) {
    const {functionality,setModal} = props;
    const [isVisible,setVisible] = useState(false)
    const [id, setID] = useState("")
    const [phone, setPhone] = useState("")
    const [order, setOrder] = useState("")
    const [address, setAddress] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    useEffect(() =>{
        setVisible(true)
    },[])

    const updateOrder = (id, phone,address,order) => {
        const newOrder = {
            "id":id,
            "phone": phone,
            "address": address,
            "order": order,
        }
        axios.put("http://localhost:3001/order/"+id,newOrder)
        .then((response) => {
            alert("Update success")
            setVisible(false); setModal(null);
        })
        .catch((error) =>{alert(error.message)})
    }

    const updateMember = (firstName,lastName,address,phone) => {
        const newMember = {
            "firstName": firstName,
            "lastName": lastName,
            "address": address,
            "phone": phone
        }
        axios.put("http://localhost:3001/member/"+phone,newMember)
        .then((response) => {
            alert("Update success")
            setVisible(false); setModal(null);
        })
        .catch((error) =>{alert(error.message)})

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
                    <h2>Update existed member</h2>
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
                    <Button variant="contained" endIcon={<SaveIcon />} color="success" onClick={()=>{updateMember(firstname,lastname, address,phone)}}>
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
                    <h2>Update existed order</h2>
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
                       <TextField id="ID" label="ID" variant="filled" onChange={(value)=>{setID(value.target.value);}}/>
                        <TextField id="Phone" label="Telephone" variant="filled" onChange={(value)=>{setPhone(value.target.value);}}/>
                        <TextField id="Address" label="Address" variant="filled" onChange={(value)=>{setAddress(value.target.value);}}/>
                        <TextField id="Order" label="Order" variant="filled" onChange={(value)=>{setOrder(value.target.value);}}/>
                    </Box>
                </div>
                <div id="executeButton">
                    <Button variant="contained" endIcon={<SaveIcon />} color="success" onClick={()=>{updateOrder(id,phone,address,order)}}>
                        Save
                    </Button>
                </div>
            </div>
            </Modal>
        )
    }
}