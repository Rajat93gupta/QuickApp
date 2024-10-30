// 'use client'
// import { Box, Container, Typography } from '@mui/material';
// import React from 'react';
// import Grid from '@mui/material/Grid';
// import ChatBox from '@/app/sidebarComponent/ChatBox';

// const Builder = () => {
//   return (
//     <Box sx={{ width: 'calc(100vw - 129px)', height: '100vh' }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
//             <Typography variant="h5" sx={{ px: 4, py: 2 }}>
//               Hello User!
//             </Typography>
//             <Box>
//               Stepper
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//       <Container
//         maxWidth={false}
//         sx={{
//           background: '#D3D3D3',
//           display: 'flex',
//           flexDirection: 'column',
//           flexGrow: 1,
//           py: 2,
//           overflow: 'hidden',
//         }}
//       >
//         <Typography>Describe your app idea here...</Typography>
//         <Box sx={{ display: 'flex', flexGrow: 1 }}>
//           <Box
//             sx={{
//               flex: 3,
//               // // background: '#fff',
//               // p: 2,
//               // borderRadius: 1,
//               // boxShadow: 1,
//             }}
//           >
//             <ChatBox/>
//           </Box>
//           <Box
//             sx={{
//               flex: 2,
//               background: '#fff',
//               p: 2,
//               borderRadius: 1,
//               boxShadow: 1,
//               ml: 2,
//             }}
//           >
//             Suggestion
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// export default Builder;
import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import StepperSection from "@/app/sidebarComponent/BuilderComponent/Stepper";
import ChatBox from "@/app/sidebarComponent/BuilderComponent/ChatBox/ChatBox";

const Builder = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid size={{xs:12, md:3}}>
            <Box sx={{ display: "flex", alignItems: "center", height: "100%" }}>
              <Typography variant="h5" sx={{ px: 4, py: 2 }}>
                Hello User!
              </Typography>
            </Box>
          </Grid>
          <Grid size={{xs:12, md:9}}>
            <Box>
              <StepperSection />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}  sx={{
          background: '#D3D3D3',
          // display: 'flex',
          // flexDirection: 'column',
          // flexGrow: 1,
          // py: 2,
          overflow: 'hidden',
        }}>
          <Grid size={{xs:12, md:9}}>
<ChatBox/>
          </Grid>
          <Grid size={{xs:12, md:3}}>
Suggestion
          </Grid>
        </Grid>
        
      </Box>
    </div>
  );
};

export default Builder;
