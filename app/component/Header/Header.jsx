"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { Logo } from "@/public";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Login from "../Login/Login";

const pages = ["Home", "Product", "Pricing", "Contact"];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };


  const handleOpenNavMenu = () => {
    setDrawerOpen(true); // Open drawer on mobile menu icon click
  };

  const handleCloseNavMenu = () => {
    setDrawerOpen(false); // Close drawer
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffff",
          color: "black",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo for large screens */}
            <Box
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Image src={Logo} height={58} width={187} alt="logo" />
            </Box>

            {/* Mobile menu icon and logo for small screens */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                aria-label="open drawer"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ ml: 2 }}>
                {" "}
                {/* Margin between the icon and logo */}
                <Image src={Logo} height={40} width={130} alt="logo" />{" "}
                {/* Smaller logo for mobile */}
              </Box>
            </Box>

            {/* Page links for large screens */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    fontSize: "14px",
                    display: "block",
                    fontWeight: 700,
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Login/Sign Up buttons */}
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                flexDirection: { xs: "row", md: "row" },
                alignItems: "center",
                gap: { xs: 1, md: 2 },
              }}
            >
              <Button
              onClick={toggleModal} 
                variant="text"
                sx={{
                  fontWeight: 700,
                  color:"black",
                  padding: { xs: "4px 8px", md: "6px 16px" },
                  fontSize: { xs: "0.55rem", md: "0.875rem" },
                }}
              >
                Login
              </Button>
              <Button
                className="gradientBg"
                sx={{
                 
                  fontWeight: 500,
                  padding: { xs: "4px 8px", md: "6px 16px" },
                  fontSize: { xs: "0.55rem", md: "0.875rem" },
                }}
                variant="contained"
                endIcon={<ArrowForwardIcon />}
              >
                Join Us
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleCloseNavMenu}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleCloseNavMenu}
          onKeyDown={handleCloseNavMenu}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <IconButton onClick={handleCloseNavMenu}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {pages.map((page) => (
              <ListItem button key={page}>
                <ListItemText primary={page} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Login isOpen={isModalOpen} onClose={toggleModal} />

    </>
  );
};

export default Header;
