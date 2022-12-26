import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Box } from '@mui/system';
import classes from './MainSignUp.module.css';
import classesX from './LoginModal.module.css';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import ava from '../../img/avatar1.jpg';
import Input from '@mui/material/Input';
import Modal from '@mui/material/Modal';
import { Button, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ImageUploading from 'react-images-uploading';
import {FormControl} from '@mui/material';
import swal from 'sweetalert';
import axios from 'axios';

import { useMutation } from 'react-query';
import { getCookie, setCookie } from "react-use-cookie";








const style = {
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: 400,
bgcolor: 'background.paper',
border: '2px solid #000',
boxShadow: 24,
p: 4,
};
function TabPanel(props) {

    const { children, value, index, ...other } = props;
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 2 }}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
function a11yProps(index) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}



function MainSignUp() {



    const dispatch = useDispatch();

    useEffect(()=>{
    }, [])

    const [placeholderUsername, setPlaceholderUsername] = useState('Username');
    const [placeholderNickname, setPlaceholderNickname] = useState('Nickname');
    const [placeholderPassword, setPlaceholderPassword] = useState('Password');
    const [placeholderColor, setPlaceholderColor] = useState('');


    const [username, setUsername] = useState('')
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')

    const [logUser, setLogUser] = useState('')
    const [logPass, setLogPass] = useState('')


    
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false)
        setPlaceholderUsername("Username");
        setPlaceholderNickname("Nickname");
        setPlaceholderPassword("Password");
        setPlaceholderColor('inherit')
    };
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const [imageX, setImage] = useState('')
    function handleImage (e) {
        setImage(e.target.files[0])
    }

    const handleRegister = (e)=>{
        if (username=="" || nickname=="" || password==""){

            // dispatch(signUp({
            //     username:"",
            //     nickname:"",
            //     image_file:"",
            //     password:"",
            // }))
            setPlaceholderUsername("This field is required");
            setPlaceholderNickname("This field is required");
            setPlaceholderPassword("This field is required");
            setPlaceholderColor('red')

        } else {
            let formData = new FormData();
            
            const checkPost = "1234567890";
            formData.append("username", checkPost);
            formData.append("nickname", checkPost);
            formData.append("image_file", imageX); 
            formData.append("password", checkPost);
            const obj = {}
            formData.forEach((item,id)=>{
                obj[id]=item
            })
            
            // axios.post('http://134.122.75.14:8666/api/auth/signup/',      
            //   obj
            //   ,{
            //     headers: {
            //         'Content-Type': 'multipart/form-data',
            //     },
            //   }
            // )
            
            axios({
                method:'POST',
                url:'http://134.122.75.14:8666/api/auth/signup/',
                headers:{'Content-type':'multipart/form-data'},
                data:obj
            })
            
            .then(response=> console.log(response))
            .catch(function (error) {
               alert(error);
               console.log(obj);
            });

            swal({
                icon: "success",
            });
        }
    }
    
    const handleLogin = (e)=>{

        e.preventDefault();

        if (logUser==="" || logPass===""){

            // dispatch(signIn({
            //     username:"",
            //     password:"",
            // }))
            setPlaceholderUsername("This field is required");
            setPlaceholderPassword("This field is required");
            setPlaceholderColor('red')

        } else {
            const checkPost = "1234567890";
            

            axios.get('http://134.122.75.14:8666/api/auth/signin/',
                {
                    headers: {
                        'Content-Type': 'application/json',  
                    },
                }
            )
            .then(response=> console.log(response))
            .catch(function (error) {
                alert(error);
            });

            // let user = localStorage.getItem(username);
            // let data = JSON.parse(user);
            // console.log(data);

            // if(user==null){
            //     alert("Username ERROR")
            // } else if (username == data.username && password==data.password){
            //     alert("Success")
            // } else {
            //     alert("Password ERROR")
            // }
        }
    }

      



    return (
        <Modal
            open={open}
            className={classes.modalWindow1}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                overflow:"hidden",
                position:'fixed',
                // left:"31.5%",
                left:"calc(50% - 301px)",

            }}

        >
            <div className={classes.registerModal}>
                <Box sx={{
                    width:"500px",
                    // height:"672px",
                    display:"flex",
                    flexDirection:'column',
                    // justifyContent:"center",
                }}>
                    <Box sx={{
                        display:"flex",
                        flexDirection:"row-reverse",
                        padding:"0",
                        margin:'0',
                        ".MuiSvgIcon-root":{
                            path:{
                                fontSize: "large",
                            }
                        }
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
                    </Box>

                    <Box sx={{ 
                        borderBottom: 1, 
                        borderColor: 'divider', 
                        width:"100%",
                        borderBottom:"2px solid #878787",
                        textAlign:"start", 
                    }}>
                        <Tabs 
                            value={value} 
                            onChange={handleChange} 
                            aria-label="basic tabs"
                            indicatorColor="secondary"
                            textColor="black"
                            >

                            <Tab label="Вход" {...a11yProps(0)} 
                                sx={{
                                    display:'flex',
                                    color:"black",
                                    textDecoration:'none',
                                    fontSize:"24px",
                                    fontWeight:"400px",
                                    lineHeight:"35px",
                                    padding:'0',
                                    height:"35px",
                                    marginRight:"30px",
                                }}
                            />
                            <Tab label="Регистрация" {...a11yProps(1)} sx={{
                                color:"black",
                                textDecoration:'none',
                                fontSize:"24px",
                                padding:'0',
                                fontWeight:"400px",
                                lineHeight:"35px",
                                height:"35px",
                            }}/>
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0} 
                        sx={{
                            
                        }}
                    >
                        <Box  sx={{
                            display:'flex',
                            flexDirection:"column",
                            alignItems:'center',
                            paddingTop:"45px",
                        }}>
                            <FormControl>
                                <Input
                                    sx={{
                                        width:"500px",
                                        height: "52px",
                                        fontSize:"20px",
                                        border: "2px solid grey",
                                        borderRadius: "8px",
                                        paddingLeft:"16px",
                                        fontSize:"24px",
                                        fontWeight:"400",
                                        display:"flex",
                                        letterSpacing: "1.5px",
                                        fontFamily:"Montserrat",
                                        marginBottom:'30px',
                                        color:`${placeholderColor}`,
                                    }}
                                    disableUnderline
                                    placeholder={placeholderUsername}
                                    type="username"
                                    id="logUser"
                                    name="logUser"
                                    value={logUser}
                                    onChange={e => setLogUser(e.target.value)}
                                />
                            </FormControl>
                            
                            <FormControl>
                                <Input
                                    sx={{
                                        width:"500px",
                                        height: "52px",
                                        fontSize:"20px",
                                        border: "2px solid grey",
                                        borderRadius: "8px",
                                        paddingLeft:"16px",
                                        fontSize:"24px",
                                        fontWeight:"400",
                                        display:"flex",
                                        letterSpacing: "1.5px",
                                        fontFamily:"Montserrat",
                                        marginBottom:'30px',
                                        color:`${placeholderColor}`,
                                    }}
                                    disableUnderline
                                    placeholder={placeholderPassword}
                                    type="password"
                                    id="logPass"
                                    name="logPass"
                                    
                                    value={logPass}
                                    onChange={e => setLogPass(e.target.value)}
                                />
                            </FormControl>
                            

                            <Box sx={{
                                display:'flex',
                                width:'254px',
                                height:'35px',
                                marginRight:"auto",
                                marginBottom:"30px",
                            }}>
                                <Checkbox {...label} color="secondary" size="large" classes={{root: 'custom-checkbox-root'}} className={classes.myCheckBox}
                                    sx={{
                                        borderColor:"#AD02E0",
                                        padding:"0 35px 0 0",
                                        color: "#AD02E0",
                                        width:"30px",
                                        '.MuiSvgIcon-fontSizeLarge':{
                                            fontSize:"42.5px",
                                            path:{
                                                transform:'scale(1.1)'
                                            }
                                        },
                                    }}
                                />

                                <Typography sx={{
                                    fontFamily:"Montserrat",
                                    color:'#878787',
                                    fontSize:"24px",
                                    whiteSpace:"nowrap"

                                }}>Запомнить меня</Typography>
                            </Box>

                            <Button
                                onClick={handleLogin}
                                className={classes.button}
                                sx={{
                                    letterSpacing: "1.5px",
                                    fontSize:"16px",
                                    backgroundColor:"#AD02E0",
                                    color:"white",
                                    width:"500px",
                                    height: "52px",
                                    borderRadius: "8px",
                                    ':hover': {
                                        backgroundColor:"#AD02E0",
                                        boxShadow:"0 0 10px 2px #AD02E0",
                                    },
                                    ':active': {
                                        backgroundColor:"purple",
                                    },
                                }}
                                variant="contained"
                            >Вход</Button>
                        </Box>
                            
                    </TabPanel>

                    <TabPanel value={value} index={1} 
                        sx={{
                            "& form":{
                                display:'flex',
                                flexDirection:"column",
                                alignItems:'center',
                            }
                        }}>
                        <form id="formElement"
                            >
                            <Input 
                                onChange={handleImage}
                                sx={{
                                    width:"181px",
                                    height:"181px",
                                    marginTop:'16px',
                                    marginBottom:'20px',
                                }}
                                type="file"
                                name="image_file"
                                accept="image/*"
                            />

                            {/* <Button
                                className='uploadAva'
                                onClick={handleApi}
                                sx={{
                                    color:"black",
                                    fontWeight:"400",
                                    fontSize:"16px",
                                    fontFamily:"Montserrat",
                                    margin:' 0 0 40px 0',
                                    padding:'0 0 0 15px',
                                }}>ДОБАВИТЬ ФОТО</Button> */}
                            <Input
                                sx={{
                                    width:"500px",
                                    height: "52px",
                                    fontSize:"20px",
                                    border: "2px solid grey",
                                    borderRadius: "8px",
                                    paddingLeft:"16px",
                                    fontSize:"24px",
                                    fontWeight:"400",
                                    display:"flex",
                                    letterSpacing: "1.5px",
                                    fontFamily:"Montserrat",
                                    marginBottom:'30px',
                                    color:`${placeholderColor}`,
                                }}
                                disableUnderline
                                placeholder={placeholderUsername}
                                type="username"
                                name="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                            <Input
                                sx={{
                                    width:"500px",
                                    height: "52px",
                                    fontSize:"20px",
                                    border: "2px solid grey",
                                    borderRadius: "8px",
                                    paddingLeft:"16px",
                                    fontSize:"24px",
                                    fontWeight:"400",
                                    display:"flex",
                                    letterSpacing: "1.5px",
                                    fontFamily:"Montserrat",
                                    marginBottom:'30px',
                                    color:`${placeholderColor}`,

                                }}
                                disableUnderline
                                placeholder={placeholderNickname}
                                type="nickname"
                                id="nickname"
                                name="nickname"
                                value={nickname}
                                onChange={e => setNickname(e.target.value)}
                            />
                            <Input
                                sx={{
                                    width:"500px",
                                    height: "52px",
                                    fontSize:"20px",
                                    border: "2px solid grey",
                                    borderRadius: "8px",
                                    paddingLeft:"16px",
                                    fontSize:"24px",
                                    fontWeight:"400",
                                    display:"flex",
                                    letterSpacing: "1.5px",
                                    fontFamily:"Montserrat",
                                    marginBottom:'30px',
                                    color:`${placeholderColor}`
                                }}
                                disableUnderline
                                placeholder={placeholderPassword}
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <Button
                                onClick={handleRegister}
                                sx={{
                                    letterSpacing: "1.5px",
                                    fontSize:"16px",
                                    backgroundColor:"#AD02E0",
                                    color:"white",
                                    width:"500px",
                                    height: "52px",
                                    borderRadius: "8px",
                                    ':hover': {
                                        backgroundColor:"#AD02E0",
                                        boxShadow:"0 0 10px 2px #AD02E0",
                                    },
                                    ':active': {
                                        backgroundColor:"purple",
                                    },
                                }}
                                variant="contained"
                            >Регистрация </Button>
                            
                            {/* <Input  type="submit" > Register</Input> */}
                        </form>
                    </TabPanel>
                </Box>
            </div>
        </Modal>
    )
}

export default MainSignUp