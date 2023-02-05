import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import facebookIcon from "../../../shared/media/img/Facebook.svg";
import instagramIcon from "../../../shared/media/img/Instagram.svg";
import twitterIcon from "../../../shared/media/img/Twitter.svg";

function LinksContact() {
  return (
    <nav>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon
              sx={{
                minWidth: "24px",
                position: "absolute",
                left: "17.5px",
              }}
            >
              <img src={facebookIcon} alt="facebookIcon" />
            </ListItemIcon>
            <ListItemText
              primary="Link One"
              sx={{
                position: "relative",
                paddingLeft: "25px",
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon
              sx={{
                minWidth: "24px",
                position: "absolute",
                left: "10px",
              }}
            >
              <img src={instagramIcon} alt="instagramIcon" />
            </ListItemIcon>
            <ListItemText
              primary="Link Two"
              sx={{
                position: "relative",
                paddingLeft: "25px",
              }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon
              sx={{
                minWidth: "24px",
                position: "absolute",
                left: "10px",
              }}
            >
              <img src={twitterIcon} alt="twitterIcon" />
            </ListItemIcon>
            <ListItemText
              primary="Link Two"
              sx={{
                position: "relative",
                paddingLeft: "25px",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  );
}

export default LinksContact;
