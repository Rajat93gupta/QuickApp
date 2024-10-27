
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Tick } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90%", sm: "80%", md: "55rem" },
  maxHeight: "95vh",
  bgcolor: "background.paper",

  boxShadow: 24,
  p: { xs: 3, sm: 4 },

  borderRadius: "10px",
  overflowY: "auto",
};

const Data = [
  { id: 1, title: "No Coding Required" },
  { id: 2, title: "Smart Guidance" },
  { id: 3, title: "Cost Transparency" },
  { id: 4, title: "Competitor Features" },
  { id: 5, title: "Visualize Instantly" },
];

const Login = ({ isOpen, onClose }) => {
  
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          ...style,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 4 },
          backgroundImage: `url('/loginBg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: "30px",
        }}
      >
        {/* Left Column for Email and Password */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ letterSpacing: 0, pb: 1 }} variant="body2">
                ❌ At least 8 characters
              </Typography>
              <Typography sx={{ letterSpacing: 0 }} variant="body2">
                ❌ At least 1 uppercase letter
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ letterSpacing: 0, pb: 1 }} variant="body2">
                ✔️ At least 8 characters
              </Typography>
              <Typography sx={{ letterSpacing: 0 }} variant="body2">
                ✔️ At least 1 uppercase letter
              </Typography>
            </Box>
          </Box>
          <Link href="/dashboard">
          <Button
            fullWidth
            className="gradientBg"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            >
            Login
          </Button>
          </Link>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "normal",
              fontSize: "0.875rem",
              color: "#457EFF",
              textAlign: "center",
              mt: 2,
            }}
          >
            By proceeding, you are agreeing to the{" "}
            <Link href="#" style={{ color: "#457EFF", textDecoration: "none" }}>
              Terms & Conditions
            </Link>{" "}
            and Privacy Policy
          </Typography>
        </Box>

        {/* Right Column for Additional Content */}
        <Box
          sx={{
            flex: 1,
            background: "white",
            borderRadius: "10px",
            padding: "20px",
            display: { xs: "none", md: "flex" }, // Hide on small screens
            flexDirection: "column",
            alignItems: { md: "flex-start" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#6A0DAD",
              fontWeight: "700",
              fontFamily: "Inter",
              fontSize: { md: "34px" },
              lineHeight: { md: "40px" },
              marginBottom: "20px",
              textAlign: { md: "left" },
            }}
            component="h2"
          >
            Design Stunning Apps Effortlessly
          </Typography>
          {Data.map((item) => (
            <Box
              key={item.id}
              sx={{ display: "flex", alignItems: "center", gap: "10px", mb: 1 }}
            >
              <Image src={Tick} alt="tick" height={20} width={20} />
              <Typography variant="body2" sx={{ fontWeight: "500" }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default Login;
