import {React,useState,useEffect} from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

export default function InsertModal(props) {
    const {functionality,setModal} = props;
    const [isVisible,setVisible] = useState(false);
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
                        <TextField id="firstName" label="First Name" variant="filled" />
                        <TextField id="lastName" label="Last Name" variant="filled" />
                        <TextField id="Age" label="Age" variant="filled" />
                        <TextField id="Phone" label="Phone" variant="filled" />
                        <TextField id="Address" label="Address" variant="filled" />
                        
                    </Box>
                </div>
                <div id="executeButton">
                    <Button variant="contained" endIcon={<SaveIcon />} color="success">
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
                        <TextField id="Phone" label="Telephone" variant="filled" />
                        <TextField id="Address" label="Address" variant="filled" />
                        <TextField id="Order" label="Order" variant="filled" />
                    </Box>
                </div>
                <div id="executeButton">
                    <Button variant="contained" endIcon={<SaveIcon />} color="success">
                        Save
                    </Button>
                </div>
            </div>
            </Modal>
        )
    }
}