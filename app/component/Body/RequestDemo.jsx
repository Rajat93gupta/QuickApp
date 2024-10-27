import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";

const RequestDemo = () => {
  return (
    <Box sx={{ backgroundColor: "#F6EEFF", py: 5 }}>
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
          <Typography
            variant="h4"
            component="h1"
            sx={{ py: 4, fontFamily: "Roboto", fontWeight: "bold", fontSize: { xs: "2.25rem", md: "3rem" } }}
          >
            Transform Your Unique App Idea into a Reality
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Roboto",
              fontWeight: "300",
              fontSize: { xs: "1rem", md: "1.5rem" },
              mt: 4,
            }}
          >
            Unlock the potential of your concept with our intuitive app builder.
            Start your journey today and create an app that stands out in the
            market.
          </Typography>
          <Button
            variant="contained"
            className="gradientBg"
            sx={{
                background:
                "linear-gradient(90deg, #A4508B 0%, #6A0DAD 100%)",
              borderRadius: "8px",
              mt: 4,
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "0.875rem", md: "1rem" },
              padding: { xs: "8px 16px", md: "10px 20px" },
            }}

          >
            Request Demo
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default RequestDemo;
