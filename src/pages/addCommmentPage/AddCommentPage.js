import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/system'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';







function AddCommentPage() {

    const dispatch=useDispatch();
    const [open, setOpen] = React.useState(false);
    const {addComment} = useSelector(state => state.signUpReducer)
    const handleClose = () => {
        dispatch( )
        setOpen(false)
    };

    useEffect(()=>{
        setOpen(addComment)
    }, [])






  return (
    <>
        <Modal 
            open={open}
            onClose={handleClose}
            sx={{
                display:"flex",
                justifyContent:"center",
                paddingTop:"300px",
                overflow:"hidden",
                position:'fixed',
        }}>
            <Button onClick={handleClose}
                                sx={{
                                    padding:"0",
                                    margin:'0',
                                    '.MuiSvgIcon-fontSizeLarge':{
                                        fontSize:"35px",
                                        path:{
                                            transform:'scale(1.1)'
                                        }
                                    }
                                }}>
                                <CloseIcon fontSize="large" sx={{color:"black",}}/>
                            </Button>
            <FormControl variant="standard"
                sx={{
                    width:"500px",
                    border:"5px solid lightgrey",
                    padding:"10px"
                }}
            >
                <InputLabel htmlFor="input-with-icon-adornment"
                >
                    What do you think?
                </InputLabel>
                <Input
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
                <Button > Add comment </Button>
            </FormControl>
        </Modal>
    </>
  )
}

export default AddCommentPage