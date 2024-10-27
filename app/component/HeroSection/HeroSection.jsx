import Image from "next/image";
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const HeroSection = () => {
  return (
    <Box sx={{ pt: { xs: 5 }, pb: 2 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          {/* Left Section */}
          <Box flex={1} 
          textAlign={{ xs: "center", sm: "left" }}>
            <Typography
              variant="body1"
              component="span"
              fontWeight="bold"
              sx={{
                background:
                 "linear-gradient(90deg, #A4508B 0%, #6A0DAD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join Us
            </Typography>
            <Typography
              variant="h3"
              component="h1"
              fontWeight="bold"
              sx={{ mt: 1 }}
            >
              Design Your App and Get Instant Cost Estimates
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Bring your app idea to life with tailored features, <br />
              customizable design, and real-time cost insights.
            </Typography>
            <Box
              mt={4}
              display="flex"
              justifyContent={{ xs: "center", sm: "flex-start" }}
              gap={2}
            >
              <Button
                variant="contained"
               
                sx={{
                  color: "white",
                  px: { xs: 3, md: 3 },
                  py: { xs: 1.5, md: 1.5 },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  fontWeight: "bold",
                  background:
                    "linear-gradient(90deg, #A4508B 0%, #6A0DAD 100%)",
                }}
              >
                Let’s Get Started
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor:
                    "linear-gradient(90deg, #A4508B 0%, #6A0DAD 100%)",
                  px: { xs: 3, md: 3 },
                  py: { xs: 1.5, md: 1.5 },
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  fontWeight: "bold",
                  background:
                    "linear-gradient(90deg, #A4508B 0%, #6A0DAD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>

          {/* Right Section (Image) */}
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
              src="/col-md-6.png"
              alt="hero"
              layout="fill" 
              objectFit="contain" 
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
