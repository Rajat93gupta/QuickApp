import Image from "next/image";
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const PreviewApp = () => {
  return (
    <Box sx={{ backgroundColor: "#fbfbfe", pt: { xs: 3 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }} 
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
             {/* Right Section: Text */}
          <Box flex={1} p={2} >
            <Typography
              variant="h4"
              component="h1"
              fontWeight="bold"
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "1.875rem", md: "2.25rem", lg: "3rem" },
                textAlign: { xs: "center", md: "left" }, // Center text on small screens
              }}
            >
               Preview Your App

            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Montserrat",
                mt: 2,
                fontSize: { xs: "1rem", md: "1.125rem" },
                textAlign: { xs: "center", md: "left" }, // Center text on small screens
              }}
            >
              Preview your apps layout and design. See how your branding choices
              come together on different screens, and experience the user flow
              before moving forward with development.

            </Typography>
          </Box>
          {/* Left Section: Image */}
          <Box
            flex={1}
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "500px",
              height: "auto", // Adjust height automatically based on aspect ratio
              aspectRatio: "1 / 1", // Maintain a square aspect ratio (adjust as needed)
             
            }}
          >
            <Image
              src="/Col.png"
              alt="Share Your App"
              layout="fill" // Responsive layout
              objectFit="contain" // Maintain aspect ratio of the image
              sizes="(max-width: 768px) 100vw, 500px" // Adjust sizes for responsiveness
              priority // Load the image with high priority
            />
          </Box>

         
        </Box>
      </Container>
    </Box>
  );
};

export default PreviewApp;
