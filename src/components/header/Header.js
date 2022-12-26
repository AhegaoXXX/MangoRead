import React, {useState, useEffect} from 'react'
import classes from './Header.module.css'
import Container from '@mui/material/Container';
import logo from '../../img/logo.svg'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {getSearch, getMangas} from '../../store/mangaSlice'
import MainSignUp from '../registerModal/MainSignUp';
import { getModalOpenClose} from '../../store/modalSlice';




function Header(props) {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("")
    const regExpSearch = / /g;
    useEffect(()=>{
        dispatch(getMangas(search))
    }, [])


    const handleOpen = ()=>dispatch(getModalOpenClose())
    const [open, setOpen] = React.useState(false);
    // const openAction = useSelector(state => state.modalReducer.mode)
    // useEffect(() => {
    //     setOpen(openAction)
    //     console.log(openAction);
    // }, [])
    


    


    return (
        <div className={classes.header}>
            <Container disableGutters maxWidth="1240px"
                sx={{
                    fontFamily: "Montserrat",
                    width: "1240px",
                    display:"flex", 
                    height: "110px",
                    justifyContent:"space-between",
                    "& a":{
                        display:"flex",
                        textDecoration:"none",
                        justifyContent:"center"
                    }
                }}>
                <NavLink to="/">
                    <div className={classes.logo}>
                        <div className={classes.logoImg}>
                            <img src={logo} alt='logo'/>
                        </div>
                        
                        
                        <div className={classes.logoText}>
                            <h1>MangoRead</h1>
                            <p>Читай мангу с нами</p>
                        </div>
                    </div>
                </NavLink>
                <div className={classes.search}>
                    <Input
                        sx={{
                            width:"342px",
                            height: "56px",
                            fontSize:"20px",
                            border: "2px solid grey",
                            borderRadius: "8px",
                            paddingLeft:"16px",
                            fontSize:"20px",
                            display:"flex",
                            letterSpacing: "1.5px",
                        }}
                        disableUnderline
                        placeholder="Placeholder"
                        startAdornment={
                            <Button onClick={()=> dispatch(getMangas(search ? 
                                `?search=${search.replace(regExpSearch, "%20")}`
                                : ""
                                ))} >
                                <InputAdornment position="start">
                                    <SearchIcon sx={{
                                        color:"black",
                                        paddingRight:"4px"}}/>
                                </InputAdornment>
                            </Button>
                        }
                        type="search"
                        onChange={(e)=> dispatch(
                            getMangas(e.target.value
                            ? `?search=${e.target.value.replace(regExpSearch, "%20")}`: ""))}
                    />
                </div>
                <div className={classes.register}>
                    <Button 
                        sx={{
                            letterSpacing: "1.5px",
                            fontSize:"16px",
                            borderColor:"#AD02E0",
                            color: "black",
                            width:"142px",
                            height:"50px",
                            border: "2px solid #AD02E0",
                            borderRadius: "8px",
                            ':hover': {
                                backgroundColor:"#AD02E0",
                                boxShadow:"0 0 10px 2px #AD02E0",
                                color:"white",
                                borderColor:"#AD02E0"
                            },
                            ':active': {
                                color:"white",
                                backgroundColor:"purple",
                            },
                        }}
                        variant="outlined"
                        onClick={handleOpen}
                    >Войти</Button>
                    <Button 
                        sx={{
                            letterSpacing: "1.5px",
                            fontSize:"16px",
                            backgroundColor:"#AD02E0",
                            color:"white",
                            width:"206px",
                            height:"50px",
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
                        onClick={handleOpen}
                    >Регистрация</Button>
                </div>
                
                <MainSignUp open={open} />
            </Container>
        </div>
    )
}

export default Header