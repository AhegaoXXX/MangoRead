import React, { useState, useEffect } from "react";
import "@fontsource/montserrat";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import {
  changeModalAction,
  filterAction,
  getGenre,
  getMangas,
} from "../../app/store/mangaSlice";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import swal from "sweetalert";
import StandardButton from "../../shared/components/buttons/StandardButton";
import DoubleButtonsFilter from "../../features/doubleButtonsFilter/DoubleButtonsFilter";

function FilterCompNext() {
  const dispatch = useDispatch();

  const { genres, mangas } = useSelector((state) => state.mangaReducer);
  const [genreId, setGenreId] = useState([]);

  const onFilter = () => {
    let filteredMangas = null;
    genreId.map((item, id) => {
      return (filteredMangas = mangas?.results?.filter((i) =>
        i.genre.includes(item)
      ));
    });

    filteredMangas.length === 0
      ? swal({
          title: "Error:",
          text: "No such genres here",
          icon: "error",
        })
      : dispatch(filterAction(filteredMangas));
  };

  const handleChangeModal = () => {
    dispatch(changeModalAction());
  };

  useEffect(() => {
    dispatch(getGenre());
  }, [dispatch]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
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
            <ArrowBackIosIcon /> Назад
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
              fontFamily: "Montserrat",
              fontSize: "35px",
              fontWeight: 400,
            }}
          >
            Жанры
          </Typography>
          <Box
            sx={{
              height: 505,
              width: 360,
              bgcolor: "background.paper",
              overflow: "scroll",
              overflowX: "hidden",
            }}
          >
            {genres.map((item, id) => (
              <div
                style={{
                  padding: "0",
                }}
                key={id}
              >
                <ListItemIcon
                  key={item.id}
                  sx={{
                    height: "42px",
                    alignItems: "center",
                  }}
                >
                  <Checkbox
                    id={item.id}
                    size="large"
                    edge="start"
                    tabIndex={0}
                    onClick={(e) => {
                      if (genreId.includes(+e.target.id)) {
                        setGenreId(
                          genreId.filter((item) => item !== Number(e.target.id))
                        );
                      } else {
                        setGenreId([...genreId, +e.target.id]);
                      }
                    }}
                    sx={{
                      color: "#2FE09B",
                      "&.Mui-checked": {
                        color: "#2FE09B",
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Montserrat",
                      fontSize: "24px",
                      color: "black",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </Typography>
                </ListItemIcon>
              </div>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "72px",
            width: "100%",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <DoubleButtonsFilter
            resetFilter={(e) => {
              dispatch(getMangas(""));
              dispatch(filterAction(mangas?.results));
            }}
            applyFilter={onFilter}
          />
        </Box>
      </Box>
    </>
  );
}

export default FilterCompNext;
