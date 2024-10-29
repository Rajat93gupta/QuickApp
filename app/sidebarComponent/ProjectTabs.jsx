"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import ProjectCard from "./ProjectCards";
import { CardData } from "../component/Body/Helper";

export function CustomTabPanel(props) {
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
        <Box sx={{ p: 3, height: "300px", overflowY: "auto" }}>{children}</Box> // Set your desired height here
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            color:"#000000",
            borderColor: "black",
            
            '& .Mui-selected': {
              color: '#4e4e4e', 
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#000000', 
            },
          }}
        >
          <Tab label="All" {...a11yProps(0)} sx={{ color:"#4e4e4e",fontSize:"18px",fontWeight:"500" ,lineHeight:"21px"}} />
          <Tab label="Drafts" {...a11yProps(1)} sx={{ color:"#4e4e4e",fontSize:"18px",fontWeight:"500",lineHeight:"21px"}} />
          <Tab label="InProgress" {...a11yProps(2)} sx={{ color:"#4e4e4e",fontSize:"18px",fontWeight:"500" ,lineHeight:"21px"}} />
          <Tab label="Pending" {...a11yProps(2)} sx={{ color:"#4e4e4e",fontSize:"18px",fontWeight:"500" ,lineHeight:"21px"}} />
          <Tab label="Completed" {...a11yProps(2)} sx={{ color:"#4e4e4e",fontSize:"18px",fontWeight:"500" ,lineHeight:"21px"}} />
        </Tabs>
      </Box>
      <Container
        maxWidth={false}
        sx={{
            background: "#D3D3D3",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            py: 2,
            overflow: "hidden",
        }}
      >
        <CustomTabPanel value={value} index={0}>
          {/* Content for Item One */}
          <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1, // Add space between the cards
            // justifyContent: "center" // Center the cards; use "space-between" or "flex-start" if needed
          }}>
            {CardData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {/* Content for Item Two */}
          <p>This is the content for Item Two.</p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {/* Content for Item Three */}
          <p>This is the content for Item Three.</p>
        </CustomTabPanel>
      </Container>
    </Box>
  );
}
