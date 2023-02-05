import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import classes from "./MainSignUp.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { infoModalClose, changeAuthModalTabs } from "../../app/store/signUpSlice";
import FirstRegModalComp from "../../features/authModalComp/firstRegModalComp/FirstRegModalComp";
import SecondRegModalComp from "../../features/authModalComp/secondRegModalComp/SecondRegModalComp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function MainSignUp() {
  const dispatch = useDispatch();
  const { authModalTabsIndex }= useSelector(state=>state.signUpReducer)
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    dispatch(infoModalClose());
    setOpen(false);
  };
  const handleChange = (event, newValue) => {
    dispatch(changeAuthModalTabs(newValue));

  };
  const openAction = useSelector((state) => state.signUpReducer.mode);

  return (
    <div className={classes.mainSignUp}>
      <Modal
        open={openAction}
        className={classes.modalWindow1}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          overflow: "hidden",
          position: "fixed",
          left: "calc(50% - 301px)",
        }}
      >
        <div className={classes.registerModal}>
          <Box
            sx={{
              width: "500px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                padding: "0",
                margin: "0",
                ".MuiSvgIcon-root": {
                  path: {
                    fontSize: "large",
                  },
                },
              }}
            >
              <Button
                onClick={handleClose}
                sx={{
                  padding: "0",
                  margin: "0",
                  ".MuiSvgIcon-fontSizeLarge": {
                    fontSize: "35px",
                    path: {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <CloseIcon fontSize="large" sx={{ color: "black" }} />
              </Button>
            </Box>

            <Box
              sx={{
                borderColor: "divider",
                width: "100%",
                borderBottom: "2px solid #878787",
                textAlign: "start",
              }}
            >
              <Tabs
                value={authModalTabsIndex}
                onChange={handleChange}
                aria-label="basic tabs"
                indicatorColor="secondary"
                textColor="inherit"
              >
                <Tab
                  label="Вход"
                  {...a11yProps(0)}
                  sx={{
                    display: "flex",
                    color: "black",
                    textDecoration: "none",
                    fontSize: "24px",
                    fontWeight: "400px",
                    lineHeight: "35px",
                    padding: "0",
                    height: "35px",
                    marginRight: "30px",
                  }}
                />
                <Tab
                  label="Регистрация"
                  {...a11yProps(1)}
                  sx={{
                    color: "black",
                    textDecoration: "none",
                    fontSize: "24px",
                    padding: "0",
                    fontWeight: "400px",
                    lineHeight: "35px",
                    height: "35px",
                  }}
                />
              </Tabs>
            </Box>
            <TabPanel value={authModalTabsIndex} index={0} sx={{}}>
              <FirstRegModalComp />
            </TabPanel>

            <TabPanel value={authModalTabsIndex} index={1}>
              <SecondRegModalComp />
            </TabPanel>
          </Box>
        </div>
      </Modal>
    </div>
  );
}

export default MainSignUp;
