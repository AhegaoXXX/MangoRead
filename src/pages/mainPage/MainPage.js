import React, { useState, useEffect} from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import classes from './MainPage.module.css'
import "@fontsource/montserrat";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CardsMainPage from '../../components/cardsMainPage/CardsMainPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useDispatch, useSelector} from "react-redux"
import {NavLink} from "react-router-dom";
import {getMangas} from '../../store/mangaSlice'
import FilterCompStart from '../../components/filterComp/FilterCompStart'
import FilterCompNext from '../../components/filterComp/FilterCompNext'





function MainPage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2FE09B",
        contrastText: '#EEE'
      },
    }
  })
  const dispatch= useDispatch();
  const countMangas = useSelector(state=> state.mangaReducer.countMangas)
  const data = useSelector(state => state.mangaReducer.mangas)
  const {modalChange, filtered} = useSelector(state => state.mangaReducer)
  useEffect(() => {
    dispatch(getMangas())
  }, [dispatch])
  const mangaCount = Math.ceil(countMangas/data.length);
  const [page, setPage] = useState(1);
  


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
            justifyContent:"center",
            flexDirection:"column"
          }}>
          <Box 
            sx={{
              display:"flex",
              alignItems:"center",
              justifyContent:"center",

          }}>
            <ThemeProvider theme={theme}>
              <Stack spacing={3}>
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
                      {
                        !modalChange?<FilterCompStart/>:<FilterCompNext/>
                      }
                    </Box>

                    <Box 
                      sx={{
                        display:'flex',
                        flexWrap:"wrap",
                        width:"820px",
                        height:"700px",
                        justifyContent:"space-between",
                        "& a":{
                          textDecoration:"none",
                        }
                    }}>

                      {data
                        ?
                        data.slice(0, 12).map((item) =>
                        <NavLink to={`/${item.id}`} info={{image : item.image}}>
                          <CardsMainPage key={item} post={{image : item?.image , year: item?.issue_year, name : item?.ru_name}} />
                        </NavLink>)
                        :
                        <>Nope</>
                      }

                    </Box>
                  </Box>

                <Pagination count={mangaCount} size="large" color="primary" 
                  sx={{
                    button:{
                      color: '#A5A5A5',
                      fontSize:"24px",
                      width:"45px",
                      height:"45px",
                      borderRadius:"50%",
                    },
                    ".MuiPagination-root":{
                      fontSize:"24px",
                    },
                    "& ul":{
                      justifyContent:"center"
                    },

                  }}
                  onChange={(e, value)=> {
                    dispatch(getMangas(`?page=${value}`))
                    setPage(value)
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