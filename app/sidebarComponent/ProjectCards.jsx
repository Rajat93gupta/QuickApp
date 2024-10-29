import React from "react";
import { Box, Typography, Button, Card, CardContent, Chip, Avatar } from "@mui/material";
const ProjectCard = ({ project }) => {
    return (
      <Card sx={{ mb: 2,  maxWidth: 287, maxHeight:316 }}>
        <CardContent>
          {/* Project Title and Status */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography variant="h6" fontSize="20px">{project.title}</Typography>
            <Chip label={project.status} color={project.status === "Draft" ? "warning" : "primary"} />
          </Box>
  
          {/* Created On Date */}
          <Typography variant="body2" color="textSecondary">
            Created on: {project.createdOn}
          </Typography>
  
          {/* Milestones */}
          <Typography variant="subtitle1" mt={2}>
            Project Milestones
          </Typography>
          <Box display="flex" alignItems="center" mt={1} mb={2}>
            {project.milestones.map((milestone, index) => (
              <Box key={index} textAlign="center" mx={1}>
                <Avatar  sx={{height:"36px", width:"36px", bgcolor: milestone.status === "completed" ? "purple" : "grey.400" }}>
                  {milestone.icon}
                </Avatar>
                {/* <Typography variant="caption">{milestone.name}</Typography> */}
              </Box>
            ))}
          </Box>
  
          {/* Time Spent and Duration */}
         <Box display="flex" justifyContent="space-between">
         <Typography variant="body2" color="textSecondary">
            Time spent:<br/> {project.timeSpent}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Duration:<br/> {project.duration}
          </Typography>
         </Box>
  
          {/* Edit Project Button */}
          <Button variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
            Edit Project
          </Button>
        </CardContent>
      </Card>
    );
  };

export default ProjectCard