"use client"; // necessary for Next.js app directory

import { useState } from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const testimonials = [
  {
    id: 1,
    text: "Building my app was easier and faster than I ever imagined. The AI suggestions were spot on!",
    name: "Marie Poirot",
    company: "Bigapp",
    imgSrc: "/frame.png",
  },
  {
    id: 2,
    text: "This service has transformed our workflow, making us more efficient and productive.",
    name: "John Doe",
    company: "Tech Solutions",
    imgSrc: "/right.png",
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
        py: 5,
        px: { xs: 2, md: 12 }, // Responsive padding
        backgroundColor: "#E0F7FA",
        borderRadius: "8px",
        position: "relative",
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "800", fontSize: { xs: "24px", md: "56px" }, lineHeight: { xs: "32px", md: "61px" } }}
        textAlign="center"
        gutterBottom
      >
        What customers say about us
      </Typography>

      {/* Testimonial Content */}
      <Box
        sx={{
          display: { xs: "block", md: "flex" }, // Stack on small screens
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, md: 9 },
          py: 4,
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          boxShadow: 3,
          gap: 3,
          position: "relative",
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
        <Box sx={{ position: "relative", width: { xs: "100%", md: "400px" }, height: { xs: "300px", md: "400px" } }}>
          {/* Background rotated box */}
          <Box
            sx={{
              position: "absolute",
              width: { xs: "80%", md: "349px" },
              height: { xs: "95%", md: "396px" },
              backgroundColor: "#e74c3c",
              transform: "rotate(-28deg)",
              top: "10px",
              left: { xs: "10%", md: "7px" },
              borderRadius: "8px",
              zIndex: 1,
            }}
          />
          {/* Foreground Avatar */}
          <Box
            component="img"
            src={testimonials[currentSlide].imgSrc}
            alt={testimonials[currentSlide].name}
            sx={{
              position: "relative",
              width: "100%", // Responsive width
              height: "100%", // Responsive height
              borderRadius: "8px",
              boxShadow: 3,
              border: "4px solid white",
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

      {/* Indicator Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        {testimonials.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              height: 10,
              width: 10,
              borderRadius: "50%",
              backgroundColor: currentSlide === index ? "primary.main" : "grey.400",
              mx: 0.5,
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
