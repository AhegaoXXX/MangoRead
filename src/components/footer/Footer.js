import React from 'react'
import classes from './Footer.module.css'
import Container from '@mui/material/Container';
import logo from '../../img/logo.svg'
import Box from '@mui/material/Box';
import facebookIcon from '../../img/Facebook.svg'
import instagramIcon from '../../img/Instagram.svg'
import twitterIcon from '../../img/Twitter.svg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';



function Footer() {




  return (
    <Box className={classes.footer}
      sx={{
        height: "402px",
        display:"flex", 
        justifyContent:"space-between",
        flexDirection:"column",
        boxShadow: "4px 0px 15px 0px rgba(128, 128, 128, 0.226)",
      }}>
      <Box
        sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            minHeight: "310px" ,
            borderBottom: "1px solid #BBBBBB"
        }}
        >
          <Container disableGutters maxWidth="1240px"
            sx={{
              fontFamily: "Montserrat",
              width: "1240px",
              display:"flex", 
              alignItems:"center",
              justifyContent:"space-between",
              "& a":{
                textDecoration:"none"
              }
            }}>
            <NavLink to="/">
              <Box className={classes.logo}>
                <div className={classes.logoImg}>
                  <img src={logo} alt='logo'/>
                </div>
                <div className={classes.logoText}>
                    <h1>MangoRead</h1>
                    <p>Читай мангу с нами</p>
                </div>
              </Box>
            </NavLink>
            
            <Box sx={{ 
              height:"136px",
              display:"flex",
              alignItems:"center"
              }}>
              <nav >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton >
                      <ListItemIcon sx={{
                        minWidth:"24px",
                        position: "absolute",
                        left:"17.5px",
                      }}>
                        <img src={facebookIcon} alt="facebookIcon"/>
                      </ListItemIcon>
                      <ListItemText primary="Link One" 
                      sx={{
                        position:"relative",
                        paddingLeft:"25px",
                        
                      }}/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon sx={{
                        minWidth:"24px",
                        position: "absolute",
                        left:"10px"
                      }}>
                        <img src={instagramIcon} alt="instagramIcon"/>
                      </ListItemIcon>
                      <ListItemText primary="Link Two" 
                      sx={{
                        position:"relative",
                        paddingLeft:"25px"
                      }}/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon sx={{
                        minWidth:"24px",
                        position: "absolute",
                        left:"10px"
                      }}>
                        <img src={twitterIcon} alt="twitterIcon"/>
                      </ListItemIcon>
                      <ListItemText primary="Link Two"
                      sx={{
                        position:"relative",
                        paddingLeft:"25px"
                      }}/>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>

            <Box>
                <iframe style={{borderRadius:"20px", boxShadow:"0 0 30px 0px lightgrey"}}
                class="gmap_iframe" width="400px" height="250px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Bishkek, Gogol 28&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="googleMap"></iframe>
            </Box>

        </Container>
          
      </Box>

      <Box
        sx={{
          display:"flex", 
          height: "92px",
          alignItems:"center",

        }}
        >
        <Container disableGutters maxWidth="1240px"
          sx={{
            fontFamily: "Montserrat",
            width: "1240px",
            display:"flex", 
            alignItems:"center",
            justifyContent:"center",
            
          }}>

          <Typography>
            ©2022, All right reserved.
          </Typography>
          {/* <Typography>
            ©2022, By Elmurat Dzhumabaev. All right reserved.
          </Typography> */}

          <Box sx={{ 
              display:"flex",
              flexDirection:"row",
              paddingLeft:"16px",
              }}>
              <List component={Stack} direction="row"
                sx={{
                  display:"flex",
                  minWidth:"345px"
                }}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Privacy Policy"
                      sx={{textDecoration: 'underline'}}/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton sx={{whiteSpace: "nowrap"}}>
                      <ListItemText primary="Terms of Service"
                      sx={{textDecoration: 'underline'}}/>
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton sx={{whiteSpace: "nowrap"}}>
                      <ListItemText primary="Cookies Settings"
                      sx={{textDecoration: 'underline'}}/>
                    </ListItemButton>
                  </ListItem>
                </List>
            </Box>
              
        </Container>
      </Box>
    </Box>
  )
}


export default Footer