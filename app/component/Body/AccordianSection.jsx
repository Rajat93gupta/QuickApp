"use client";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { questions } from "./Helper";

const AccordianSection = () => {
  return (
    <Container  sx={{ py: 4, px: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          textAlign: "center",

          py: 8,
          fontFamily: "Roboto",
          fontWeight: "bold",
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Box>
        {questions.map((question) => (
          <Accordion elevation={0} key={question.id} sx={{ mb: 2 }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${question.id}-content`}
              id={`panel${question.id}-header`}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                {question.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "gray" }}>{question.info}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default AccordianSection;
