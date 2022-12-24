import React from 'react'
import classes from './CardsMainPage.module.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainPage from '../../pages/mainPage/MainPage';


function CardsMainPage(props) {

  const [card, setCard] = useState([]);

  useEffect(()=>{
    fetch('http://134.122.75.14:8666/api/v1/manga/')
    .then(response=>response.json())
    .then(data=>setCard(data))
  }, []);





  return (
    <>
      {
        card.map(item=><p>{item.title}
            <Link to={`/news/${item.id}`}>Посмотреть</Link>
        </p>)
      }


      <Box 
        sx={{
          display:"flex",
          width:"170px",
          height:"68px",
          borderRadius:"15px",
          boxShadow:"0 0px 5px 0px lightgrey",
          flexDirection:"column",
          alignItems:"flex-start",
          justifyContent:"space-between",
          padding:"141px 10px 11px 10px",
          backgroundSize:"cover",
          color:"white",
          textAlign:"start",
          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.07044021221769958) 4%, rgba(60,59,59,0.7259023970916492) 69%), url(${props.post.image})`,
        }}>
          <Typography>Год: {props.post.year}</Typography>
          <Typography>{props.post.name}</Typography>
      </Box>
    
    </>
    
  )
}

{/* <img className={`${classes.image}`} src={props.post.image} alt={props.post.name} /> */}

export default CardsMainPage