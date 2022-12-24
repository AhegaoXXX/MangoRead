import React from 'react'
import classes from './CardsMainPage.module.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import img1 from '../../img/bokuNoPico.jpg'


function CardsMainPage(props) {
  return (
    <Box sx={{
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
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.07044021221769958) 4%, rgba(60,59,59,0.445790352273722) 100%), url(${img1})`,

    }}>
        <Typography>Год</Typography>
        <Typography>Название</Typography>
    </Box>
  )
}

{/* <img className={`${classes.image}`} src={props.post.image} alt={props.post.name} /> */}

export default CardsMainPage