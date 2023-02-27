import React from "react";
import "./SideBar.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Stack,
  Box,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Avatar } from "@mui/material";
export const SideBar = () => {
  const navigate = useNavigate();
  const pages = ["Admin", "Messages", "Reports"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <AccessTimeFilledIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          WORKER_TIMER
        </Typography>

        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: "flex", md: "none" },
            flexGrow: 1,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          LOGO
        </Typography>

        <Stack direction="row" spacing={2}>
          {" "}
        </Stack>
        <Button onClick={() => navigate("/adminpage")} color="inherit">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <AdminPanelSettingsIcon />
          </IconButton>
          Admin Panel
        </Button>
        <Button onClick={() => navigate("/PmManager")} color="inherit">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <MarkunreadIcon />
          </IconButton>
          Messages
        </Button>
        <Button onClick={() => navigate("/MyReports")} color="inherit">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <BarChartIcon />
          </IconButton>
          My Reports
        </Button>
        <Box sx={{ display: 'flex' }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar>N</Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)} 
            onClose={handleCloseUserMenu}
          >
            <MenuItem
              onClick={() => navigate("/adminpage")}
              // the 'to' prop (and any other props not recognized by MenuItem itself)
              // will be passed down to the Link component
            >
              Admin Panel
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/MyReports")}
              // the 'to' prop (and any other props not recognized by MenuItem itself)
              // will be passed down to the Link component
            >
              My Reports
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/PmManager")}
              // the 'to' prop (and any other props not recognized by MenuItem itself)
              // will be passed down to the Link component
            >
              PM Message
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/")}
              // the 'to' prop (and any other props not recognized by MenuItem itself)
              // will be passed down to the Link component
            >
              Log Out
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default SideBar;
