import React, { useState, useEffect} from 'react'
import "@fontsource/montserrat";
import Box from '@mui/material/Box';
import {Button, Typography} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useDispatch, useSelector} from "react-redux"
import {changeModalAction, filterAction, getGenre, getMangas} from '../../store/mangaSlice'
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import swal from 'sweetalert';





function FilterCompNext() {

  const dispatch= useDispatch();

  const data = useSelector(state => state.mangaReducer.mangas)
  const {genres}=useSelector(state => state.mangaReducer)
  const [checked, setChecked] = React.useState([0]);
  const [genreId,setGenreId]=useState([])
  const {filtered}=useSelector(state=>state.mangaReducer)
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
      
    if (currentIndex === -1) {
      newChecked.push(value);
      newChecked.splice(checked, 1);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  
  const onFilter = () => {
    console.log(filtered);
    const filteredMangas = filtered.filter(item =>item.genre.includes(genreId)) 
    filteredMangas.length === 0 ? swal({icon: "error"}) : dispatch(filterAction(filteredMangas))
  }
  const handleChangeModal=()=>{
    dispatch(changeModalAction())
  }

  useEffect(() => {
    dispatch(getMangas())
    dispatch(getGenre())
  }, [dispatch])





  return (
    <>
      <Box 
      sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"start",
      }}>
        <Box
        sx={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          width:"100%"
        }}>
          <Button onClick={handleChangeModal} sx={{
            display:'flex',
            color:"grey", 
            height:'70px',
            textTransform:"inherit",
            fontSize:"24px",
          }}>
            <ArrowBackIosIcon/> Назад
          </Button>
        </Box>
        
        <Box 
        sx={{
          display:"flex",
          flexDirection:"column",
        }}>
          <Typography sx={{
            fontFamily: "Montserrat",
            fontSize: "35px",
            fontWeight: 400,
          }}>Жанры</Typography>
          <Box
            sx={{height: 450, width: 360, bgcolor: 'background.paper',
            overflow:'scroll',overflowX:'hidden'
            }}
          >
            {genres.map(item=><div style={{display:'flex',alignItems:'center'}}>
              <ListItemIcon key={item.id}>
                      <Checkbox id={item.id}
                        edge="start"
                        tabIndex={0}
                        disableRipple
                        onClick={(e)=>{
                          if(genreId.includes(e.target.id)) {
                            setGenreId(genreId.filter(item=>item!==e.target.id))
                          }else{
                            setGenreId([...genreId,e.target.id])
                          }
                        }}
                      />
                    </ListItemIcon>
                    {item.title}
            </div>)}
          </Box>
        </Box>

        <Box 
        sx={{
          display:"flex", 
          justifyContent:"space-between",
          height:"72px",
          width:"100%",
          alignItems:"center",
          marginTop:"auto",
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
              onClick={(e)=>
                onFilter()
              }
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
    </>
  )
}

export default FilterCompNext