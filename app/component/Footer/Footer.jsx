import Image from "next/image";
import React from "react";
import { Container, Typography, Divider, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Box sx={{ width: "100%" }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Grid
            container
            rowSpacing={1}
            justifyContent="center"
            textAlign="center"
          >
            {/* Logo Section */}
            <Grid size={{ xs: 12, sm: 3 }}>
              <Image
                src="/logo.png"
                height={35}
                width={217}
                alt="Company logo"
              />
            </Grid>

            {/* Navigation Sections */}
            <Grid size={{ xs: 6, sm: 2 }} className="footerLink">
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "medium", color: "#94A3B8" }}
              >
                PRODUCT
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Pricing
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Overview
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Browse
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Accessibility
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Five
              </Typography>
            </Grid>

            <Grid size={{ xs: 6, sm: 2 }} className="footerLink">
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "medium", color: "#94A3B8" }}
              >
                SOLUTIONS
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Brainstorming
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Ideation
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Wireframing
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Accessibility
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Research
              </Typography>
            </Grid>

            <Grid size={{ xs: 6, sm: 2 }} className="footerLink">
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "medium", color: "#94A3B8" }}
              >
                RESOURCES
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Help Center
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Blog
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Tutorials
              </Typography>
            </Grid>

            <Grid size={{ xs: 6, sm: 3 }} className="footerLink">
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "medium", color: "#94A3B8" }}
              >
                COMPANY
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                About
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Press
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Event
              </Typography>
              <Typography variant="body2" sx={{ pt: 1 }}>
                Careers
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 2 }} />

          {/* Footer Bottom Section */}
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid size={{xs:12, sm:6}}>
              <Typography variant="body2" sx={{ color: "#0F172A" }}>
                @ 2023 Protech, Inc. All rights reserved.
              </Typography>
            </Grid>
            <Grid
              size={{xs:12, sm:6}}
              display="flex"
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems="center"
              className="footerLink"
            >
              
              <Typography variant="body2" sx={{ color: "#475569", mx: 1 }}>
                Term
              </Typography>
              <Typography variant="body2" sx={{ color: "#475569", mx: 1 }}>
                Privacy
              </Typography>
              <Typography variant="body2" sx={{ color: "#475569", mx: 1 }}>
                Content
              </Typography>
              
              <div style={{
                display:"flex" ,gap:"12px"
              }}>
                <FaYoutube size={20} className="text-[#0F172A]" />
                <FaFacebookF size={20} className="text-[#0F172A]" />
                <FaTwitter size={20} className="text-[#0F172A]" />
                <FaInstagram size={20} className="text-[#0F172A]" />
                <FaLinkedinIn size={20} className="text-[#0F172A]" />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
