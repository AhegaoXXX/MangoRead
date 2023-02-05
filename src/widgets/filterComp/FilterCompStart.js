import React, { useState, useEffect } from "react";
import "@fontsource/montserrat";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import RemoveIcon from "@mui/icons-material/Remove";
import Input from "@mui/material/Input";
import { changeModalAction, filterAction } from "../../app/store/mangaSlice";
import { getMangas } from "../../app/store/actionsRequest/mangaListActions";
import DoubleButtonsFilter from "../../features/doubleButtonsFilter/DoubleButtonsFilter";

function FilterCompStart() {
  const dispatch = useDispatch();

  const { mangas } = useSelector((state) => state.mangaReducer);
  const typesManga = ["Манга", "Манхва", "Западный комикс", "Маньхуа"];
  const [checked, setChecked] = React.useState([0]);
  const [type, setType] = useState("");
  const [startYear, setStartYear] = useState("0");
  const [endYear, setEndYear] = useState("2022");
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    setType(value);

    if (currentIndex === -1) {
      newChecked.push(value);
      newChecked.splice(checked, 1);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const handleChangeModal = () => {
    dispatch(changeModalAction());
  };

  const onFilter = () => {
    const filteredMangas = mangas?.results?.filter(
      (item) => item?.issue_year >= startYear && item?.issue_year <= endYear
    );
    dispatch(filterAction(filteredMangas));
  };
  useEffect(() => {}, [dispatch]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "24px",
              paddingLeft: "10px",
              fontWeight: 400,
            }}
          >
            Жанры
          </Typography>
          <Button
            onClick={handleChangeModal}
            sx={{
              display: "flex",
              color: "grey",
              height: "70px",
              textTransform: "inherit",
              fontSize: "24px",
            }}
          >
            Все <ArrowForwardIosIcon />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              paddingTop: "33px",
              paddingLeft: "10px",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: 400,
            }}
          >
            Тип
          </Typography>
          <Box
            sx={{
              paddingBottom: "33px",
            }}
          >
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                fontSize: "45px",
                padding: "0",
              }}
            >
              {typesManga.map((value, id) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                  <ListItem key={value} disablePadding>
                    <ListItemButton
                      onClick={handleToggle(value)}
                      sx={{
                        padding: "0",
                        paddingLeft: "10px",
                        height: "40px",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          alignItems: "center",
                        }}
                      >
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(value) !== -1}
                          tabIndex={0}
                          inputProps={{ "aria-labelledby": labelId }}
                          size="large"
                          sx={{
                            color: "#2FE09B",
                            "&.Mui-checked": {
                              color: "#2FE09B",
                            },
                          }}
                        />
                        <Typography
                          id={labelId}
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: "24px",
                            fontWeight: 400,
                            color: "black",
                          }}
                        >
                          {value}
                        </Typography>
                      </ListItemIcon>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box
            sx={{
              display: "flex",
              paddingX: "10px",
              alignItems: "center",
            }}
          >
            <Input
              onChange={(e) => setStartYear(e.target.value)}
              placeholder="  От 0"
              type="number"
              sx={{
                width: "168px",
                height: "55px",
                border: "2px solid #2FE09B",
                borderRadius: "8px",
              }}
            />

            <RemoveIcon />

            <Input
              onChange={(e) => setEndYear(e.target.value)}
              placeholder="  До 2022"
              type="number"
              sx={{
                width: "168px",
                height: "55px",
                border: "2px solid #2FE09B",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "72px",
            alignItems: "center",
            marginTop: "auto",
            width: "360px",
          }}
        >
          <DoubleButtonsFilter
            resetFilter={() => {
              dispatch(getMangas(""));
              dispatch(filterAction(mangas?.results));
            }}
            applyFilter={() => {
              dispatch(getMangas(`type=${type}`));
              onFilter();
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default FilterCompStart;
