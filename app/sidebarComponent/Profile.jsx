import { PhotoCamera } from "@mui/icons-material";
import { Avatar, Box, Button, IconButton, Tooltip } from "@mui/material";
import React from "react";
import UserForm from "./ProfileForm";


const Profile = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", mb:5 }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
            // onChange={handleImageChange}
          />
          <Tooltip title="Upload Profile Picture">
            <IconButton
              color="primary"
              component="span"
              htmlFor="icon-button-file"
              sx={{
                position: "absolute",
                right: 0,
                bottom: 0,
                bgcolor: "white", // Background color for better visibility
                borderRadius: "50%", // Make it circular
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)", // Shadow for depth
                "&:hover": {
                  bgcolor: "lightgray", // Hover effect
                },
              }}
            >
              <PhotoCamera />
            </IconButton>
          </Tooltip>
          <Avatar
            alt="Profile Picture"
            src="/frame.png"
            sx={{
              width: 200,
              height: 200,
              border: "2px solid #1976d2", // Customize border color
            }}
          />
        </div>
        <Box sx={{ ml: 12, display: "flex", gap: "10px" }}>
          <Button
            sx={{
              backgroundColor: "#6A0DAD", // Custom background color
              color: "white", // Custom text color
            }}
            variant="contained"
            disableElevation
          >
            Edit Profile
          </Button>
          <Button
            sx={{
              backgroundColor: "#e8e7e7", // Custom background color
              color: "#808080", // Custom text color
            }}
            variant="contained"
            disableElevation
          >
            Delete Account
          </Button>
        </Box>

      </Box>
      <UserForm />
    </Box>
  );
};

export default Profile;
