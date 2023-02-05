import { Input, InputAdornment } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMangas } from "../../app/store/mangaSlice";
import SearchIcon from "@mui/icons-material/Search";

function SearchBarManga() {
  const dispatch = useDispatch();
  const regExpSearch = / /g;
  useEffect(() => {
    dispatch(getMangas());
  }, [dispatch]);

  return (
    <div>
      <Input
        sx={{
          width: "342px",
          height: "56px",
          border: "2px solid grey",
          borderRadius: "8px",
          paddingLeft: "16px",
          fontSize: "20px",
          display: "flex",
          letterSpacing: "1.5px",
        }}
        disableUnderline
        placeholder="Placeholder"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon
              sx={{
                color: "black",
                paddingRight: "4px",
              }}
            />
          </InputAdornment>
        }
        type="search"
        onChange={(e) =>
          dispatch(
            getMangas(
              e.target.value
                ? `search=${e.target.value.replace(regExpSearch, "%20")}`
                : ""
            )
          )
        }
      />
    </div>
  );
}

export default SearchBarManga;
