import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import React from "react";

function ProductRightsLinks() {
  return (
    <div>
      <Container
        disableGutters
        maxWidth="1240px"
        sx={{
          display: "flex",
          fontFamily: "Montserrat",
          width: "1240px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography>©2022, All right reserved.</Typography>
        {/* <Typography>
            ©2022, By Elmurat Dzhumabaev. All right reserved.
          </Typography> */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "16px",
          }}
        >
          <List
            component={Stack}
            direction="row"
            sx={{
              display: "flex",
              minWidth: "345px",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary="Privacy Policy"
                  sx={{ textDecoration: "underline" }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton sx={{ whiteSpace: "nowrap" }}>
                <ListItemText
                  primary="Terms of Service"
                  sx={{ textDecoration: "underline" }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton sx={{ whiteSpace: "nowrap" }}>
                <ListItemText
                  primary="Cookies Settings"
                  sx={{ textDecoration: "underline" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Container>
    </div>
  );
}

export default ProductRightsLinks;
