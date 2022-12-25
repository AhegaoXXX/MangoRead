import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import classes from './MainPage.module.css'
import "@fontsource/montserrat";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Button} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CardsMainPage from '../../components/cardsMainPage/CardsMainPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux"
import {Link, NavLink} from "react-router-dom";
import {getMangas} from '../../store/mangaSlice'




function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

function MainPage(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2FE09B",
        contrastText: '#EEE'
      },
    }
  })
  const dispatch= useDispatch();

  const data = useSelector(state => state.mangaReducer.mangas)
  useEffect(() => {
    dispatch(getMangas())
  }, [])

    


  return (
    <div className={classes.mainPage}>
      <Header/>

      <Box 
        sx={{
          display:"flex",
          height:"846px",
          backgroundColor:"F3F3F3",
      }}>
        <Container
          sx={{
            fontFamily: "Montserrat",
            width: "1240px",
            display:"flex", 
            alignItems:"center",
            justifyContent:"flex-end",
            flexDirection:"column"
          }}>

          <Box 
            sx={{
              display:"flex",
              justifyContent:"space-between",
              width:"1240px"
            }}>
            <Box sx={{
              display:"flex",
              width:'400px',
              height:'700px',
              boxShadow: '0 4px 15px 0px rgba(128, 128, 128, 0.226)',
              justifyContent:"center",
              borderRadius:"15px"

              }}>
              <Box sx={{
                display:"flex",
                flexDirection:"column",
                width:'360px',
                justifyContent:"space-between",
                alignItems:"center",
              }}>
                <Button sx={{
                  display:'flex',
                  color:"grey", 
                  height:'70px',
                  alignItems:"center",
                  marginRight:"auto",
                  textTransform:"inherit",
                  fontSize:"24px"
                }}>
                  <ArrowBackIosIcon/> Назад
                </Button>

                <Box
                  sx={{ height: 400, maxWidth: 700, bgcolor: 'background.paper' }}
                >
                  <FixedSizeList
                    height={402.5}
                    width={314}
                    itemSize={35}
                    itemCount={40}
                    overscanCount={11.5}
                  >
                    {renderRow}
                  </FixedSizeList>
                </Box>

                <Box sx={{
                  display:"flex", 
                  justifyContent:"space-between",
                  height:"72px",
                  width:"100%",
                  alignItems:"center"
                  }}>
                  <Button 
                      sx={{
                          letterSpacing: "1.5px",
                          fontSize:"16px",
                          backgroundColor:"#AD02E0",
                          color:"white",
                          width:"174px",
                          height:"52px",
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
                  >Сбросить</Button>
                  <Button 
                      sx={{
                          letterSpacing: "1.5px",
                          fontSize:"16px",
                          backgroundColor:"#AD02E0",
                          color:"white",
                          width:"174px",
                          height:"52px",
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
                  >Применить</Button>
                </Box>
              </Box>
            </Box>

            <Box 
            sx={{
              display:'flex',
              flexWrap:"wrap",
              width:"820px",
              height:"700px",
              justifyContent:"space-between",
            }}>
              {{data} ? data.slice(1, 13).map((item) =>
                <NavLink to={`/${item.id}`} info={{image : item.image}}>
                  <CardsMainPage key={item} post={{image : item?.image , year: item?.issue_year, name : item?.ru_name}} />
                </NavLink>)
                :
                <>OMG</>}

            </Box>
          </Box>


          <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            height:"115px"
          }}>
            <ThemeProvider theme={theme}>
              <Stack spacing={2}>
                <Pagination count={99} size="large" color="primary" sx={{
                  button:{
                    color: '#A5A5A5',
                    fontSize:"24px",
                    width:"45px",
                    height:"45px",
                    borderRadius:"50%"
                  },
                  ".MuiPagination-root":{
                    fontSize:"24px",

                  }


                }}
                />
              </Stack>
            </ThemeProvider>
            
          </Box>

        </Container>
      </Box>




      <Footer/>

    </div>
  )
}



export default MainPage