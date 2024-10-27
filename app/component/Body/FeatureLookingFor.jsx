import Image from "next/image";
import React from "react";
import { features } from "./Helper";
import { Box, Card, CardContent, Typography, Container, Divider } from "@mui/material";

const FeatureLookingFor = () => {
  return (
    <Box sx={{ backgroundColor: "#fbfbfe", paddingBottom:"50px" }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{ py:4, fontFamily: "Roboto", fontWeight: "bold" }}
      >
        The features you were looking for
      </Typography>
      <Divider style={{marginBottom:"30px", marginTop:"50px"}}  />
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
                flex: "1 0 45%", // Flex-grow and basis for responsiveness
                maxWidth: "265px", // Optional: limit max width
              
                margin: "10px",
              }}
            >
              <Card
                sx={{
                   
                    height:"300px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                //   backgroundColor: "#e0e0e0",
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
                    sx={{ fontFamily: "Roboto", fontWeight: "bold" }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
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
