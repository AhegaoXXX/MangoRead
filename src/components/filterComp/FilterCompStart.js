import React, { useState, useEffect} from 'react'
import "@fontsource/montserrat";
import Box from '@mui/material/Box';
import {Button, Typography} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {useDispatch, useSelector} from "react-redux"
import {changeModalAction, filterAction, getMangas} from '../../store/mangaSlice'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import RemoveIcon from '@mui/icons-material/Remove';
import Input from '@mui/material/Input';
import swal from 'sweetalert';










function FilterCompStart() {

    const dispatch= useDispatch();

    const data = useSelector(state => state.mangaReducer.mangas)

    useEffect(() => {
        dispatch(getMangas())
    }, [dispatch])

    const typesManga = ["Манга","Манхва","Комиксы","Маньхуа"]
    const [checked, setChecked] = React.useState([0]);
    const [type, setType] = useState("");
    const [startYear, setStartYear] = useState("1813");
    const [endYear, setEndYear] = useState("2023");

    const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    setType(value)
    
    if (currentIndex === -1) {
        newChecked.push(value);
        newChecked.splice(checked, 1);
    } else {
        newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    };
    
    const onFilter = () => {
    const filteredMangas = data.filter(item => item.issue_year >= startYear && item.issue_year <= endYear)
    filteredMangas.length === 0 ? swal({icon: "error"}) : dispatch(filterAction(filteredMangas))
    }
    const handleChangeModal=()=>{
    dispatch(changeModalAction())
    }



    return (
        <>
            <Box sx={{
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
                <Typography sx={{
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontWeight: 400,

                }}>Жанры</Typography>
                <Button onClick={handleChangeModal} sx={{
                    display:'flex',
                    color:"grey", 
                    height:'70px',
                    textTransform:"inherit",
                    fontSize:"24px",
                }}>
                    Все <ArrowForwardIosIcon/>
                </Button>
                </Box>
                
                <Box sx={{
                display:"flex",
                flexDirection:"column",
                }}>
                <Typography sx={{
                    paddingTop:"33px",
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontWeight: 400,
                }}>Тип</Typography>
                <Box
                    sx={{
                    paddingBottom:"33px",
                    }}
                >
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {typesManga.map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                        <ListItem
                            key={value}
                            disablePadding
                            
                        >
                            <ListItemButton role={undefined} 
                            onClick={handleToggle(value)}
                            
                            >
                            <ListItemIcon>
                                <Checkbox
                                edge="start"
                                checked={checked.indexOf(value) !== -1}
                                tabIndex={0}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}

                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${value}`}/>
                            </ListItemButton>
                        </ListItem>
                        );
                    })}
                    </List>
                </Box>

                <Box
                    sx={{
                    display:"flex",
                    paddingX:"10px",
                    alignItems:"center",
                    }}
                >
                    <Input onChange={(e) => setStartYear(e.target.value)}
                    type="number"
                    sx={{
                    width:"168px",
                    height:"55px",
                    border:"2px solid #2FE09B",
                    borderRadius:"8px",
                    }}
                    />

                    <RemoveIcon/>

                    <Input onChange={(e) => setEndYear(e.target.value)}
                    type="number"
                    sx={{
                    width:"168px",
                    height:"55px",
                    border:"2px solid #2FE09B",
                    borderRadius:"8px",
                    }}
                    />

                </Box>
                </Box>

                <Box sx={{
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
                    onClick={(e)=> {
                        dispatch(getMangas(`?type=${type}`))
                        onFilter()
                    }}
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

export default FilterCompStart