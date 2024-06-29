import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.svg";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../style/Navbar.css";
const Navebar = () => {
  const [mobileOpne, setMobileOpne] = useState(false);

  const drawerOpen = () => {
    setMobileOpne(!mobileOpne);
  };

  const drawer = (
    <Box onClick={drawerOpen} sx={{ textAlign: "center" }}>
      <Typography color={"goldenrod"} variant="h6" sx={{ flexGrow: 1, my: 2 }}>
        <img src={logo} alt="Logo" height={`70`} width="200" />
      </Typography>
      <Divider></Divider>
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/manu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contactUs"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar>
          <Toolbar component={"nav"} sx={{ bgcolor: "black" }}>
            <IconButton
              onClick={drawerOpen}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              color={"goldenrod"}
              variant="h6"
              sx={{ flexGrow: 1, my: 2 }}
            >
              <img src={logo} alt="Logo" height={`70`} width="250" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contactUs"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpne}
            onClose={drawerOpen}
            sx={{
              display: { sm: "none", xs: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Navebar;
