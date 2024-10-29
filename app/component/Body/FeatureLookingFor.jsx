import Image from "next/image";
import React from "react";
import { features } from "./Helper";
import { Box, Card, CardContent, Typography, Container, Divider } from "@mui/material";

const FeatureLookingFor = () => {
  return (
    <Box sx={{ backgroundColor: "#fbfbfe", paddingBottom:"50px" }}>
      <Typography
        variant="h1"
        component="h1"
        fontWeight="bold"
        align="center"
        sx={{
          fontFamily: "Roboto",
          fontWeight:"800",
          fontSize: { xs: "1.875rem", md: "2.25rem", lg: "3.5rem" },
          textAlign: { xs: "center" },
          py: 4,
          lineHeight: {xs:"33px",md:"61px"},
        }}
      >
        The features you were looking for
      </Typography>
      <Divider style={{marginBottom:"30px", }}  />
      <Container>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }} 
          justifyContent="center"
         
          alignItems="center"
          flexWrap="wrap"
        >
          {features.map((feature) => (
            <Box
              key={feature.id}
              sx={{
                flex: "1 0 45%", 
                maxWidth: "265px", 
              
                margin: "10px",
              }}
            >
              <Card
                sx={{
                  height: "270px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",

                  p: 3,
                }}
              >
                <Image
                  src={feature.image}
                  alt="Meaningful alt text for an image that is not purely decorative"
                  width={50} // Set the width you want
                  height={50} // Set the height you want
                  style={{ marginBottom: "1rem" }} // Add some margin if needed
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h2"
                    align="center"
                    sx={{ fontFamily: "Roboto", fontWeight: "bold",lineHeight:"26px", fontSize:"1.3rem" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                     align="center"
                    sx={{ fontFamily: "Roboto", marginTop: 2 }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
      <Divider style={{marginTop:"50px"}} />
    </Box>
  );
};

export default FeatureLookingFor;
