"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { AccountCircleRounded, Logout, Settings } from "@mui/icons-material";
import Profile from "./Profile";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizontal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",

        
        // height: "100vh",
        
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          bgcolor: "background.paper",
          height:"300px",
          borderRadius:"10px",
          borderRight: 1,
          borderColor: "divider",
          minWidth: "150px",
          maxWidth: "200px",
          py:3
         
        }}
      >
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AccountCircleRounded sx={{ mr: 1 }} />
              Profile
            </Box>
          }
          {...a11yProps(0)}
        />
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Settings sx={{ mr: 1 }} />
              Setting
            </Box>
          }
          {...a11yProps(1)}
        />
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Logout sx={{ mr: 1 }} />
              Sign out
            </Box>
          }
          {...a11yProps(2)}
        />
      </Tabs>
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper",borderRadius:"10px", marginLeft:'10px' }}>
        <TabPanel  value={value} index={0}>
          <Profile/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Google Contacts List Here
        </TabPanel>
        <TabPanel value={value} index={2}>
          Business Customer Inputs Here
        </TabPanel>
      </Box>
    </Box>
  );
}
