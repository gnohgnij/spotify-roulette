import React, { useState } from "react";
import { Button, Drawer, Box, Typography, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { logoutUrl } from "../spotify";

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="drawer">
      <div className="drawer-button">
        <Button
          startIcon={<MenuIcon />}
          onClick={toggleDrawer}
          sx={{
            backgroundColor: "#191414",
            color: "#ffffff",
            marginLeft: "1rem",
            ":hover": {
              backgroundColor: "#4f9dfa",
            },
          }}
        >
          Menu
        </Button>
      </div>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <Box sx={{ width: "20vw", height: "100%", backgroundColor: "#191414" }}>
          <div
            className="flex-center"
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Typography
              paragraph={true}
              sx={{ color: "#ffffff" }}
              align="center"
            >
              {`Created by `}
              <Link href="https://www.github.com/gnohgnij">@gnohgnij</Link>
            </Typography>
            <Button
              variant="contained"
              className="login-logout button"
              sx={{
                position: "absolute",
                bottom: "0",
                marginBottom: "1rem",
              }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = logoutUrl;
              }}
            >
              Logout
            </Button>
          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
