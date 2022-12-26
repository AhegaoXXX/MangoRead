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
import MainPage from '../../pages/mainPage/MainPage';
import {getSearch, getMangas} from '../../store/mangaSlice'



function Header(props) {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("")

    const regExpSearch = / /g;

    useEffect(()=>{
        dispatch(getMangas(search))
        console.log(search);
    }, [])


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
                        textDecoration:"none",
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
                            <Button onClick={()=> dispatch(getMangas(`?search=${search.replace(regExpSearch, "%20")}`))} >

                                <InputAdornment position="start">
                                    <SearchIcon sx={{
                                        color:"black",
                                        paddingRight:"4px"}}/>
                                </InputAdornment>
                            </Button>
                        }
                        type="search"
                        onChange={e=>setSearch(e.target.value)}
                        
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
                    >Регистрация</Button>
                </div>
            </Container>
            
        </div>
    )
}

export default Header