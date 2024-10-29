"use client"; // necessary for Next.js app directory

import { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    id: 1,
    text: "Building my app was easier and faster than I ever imagined. The AI suggestions were spot on!",
    name: "Marie Poirot",
    company: "Bigapp",
    imgSrc: "/slide.png",
  },
  {
    id: 2,
    text: "This service has transformed our workflow, making us more efficient and productive.",
    name: "John Doe",
    company: "Tech Solutions",
    imgSrc: "/slide.png",
  },
  // Add more testimonials as needed
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        pt: 5,
        px: { xs: 2, md: 12 }, // Responsive padding
        backgroundColor: "#AAEAD0",
        borderRadius: "8px",
        position: "relative",
        boxShadow: 3,
        pb:"5rem"
      }}
    >
      <Typography
        variant="h1"
         component="h1"
        sx={{ fontWeight: "800", fontSize: { xs: "2.25rem", md: "3rem" }, lineHeight: { xs: "32px", md: "61px" } }}
        textAlign="center"
        paddingBottom="3rem"
      >
        What customers say about us
      </Typography>

      {/* Testimonial Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 7, md: 9 },
          py: 4,
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          boxShadow: 3,
          gap: 3,
          position: "relative",
          width: { xs: "100%", sm: "100%", md: "100%" }, 
           
          height: { xs: "auto", sm: "300px" }, 
        }}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: { xs: 16, md: 16 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 5,
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Text Content on Left */}
        <Box flex="1" sx={{ px: 4 }}>
          <Typography variant="body1" color="text.secondary" mb={2}>
            {testimonials[currentSlide].text}
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            {testimonials[currentSlide].name}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {testimonials[currentSlide].company}
          </Typography>
        </Box>

        {/* Custom Avatar on Right with Background Box */}
        <Box sx={{ 
           position: "relative",
           width: { xs: "100%", sm: "300px", md: "400px" },
           height: { xs: "300px", sm: "350px", md: "400px" },
        }}>
          
          {/* Foreground Avatar */}
          <Box
            component="img"
            src={testimonials[currentSlide].imgSrc}
            alt={testimonials[currentSlide].name}
            sx={{
              position: "relative",
              width: "100%", 
              height: "100%", 
              borderRadius: "8px",
             
              zIndex: 2,
            }}
          />
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: { xs: 16, md: 16 },
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 5,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

    
    </Box>
  );
}
