// import React from "react";
// import { Grid, Box, Paper } from "@mui/material";

// const MyGrid = () => {
//   return (
//     <Grid
//       container
//       spacing={1}
//       sx={{
//         maxWidth: "1150px",
//         maxHeight: "650px",
//         height: "100%",
//         width: "100%",
//         marginTop: "30px",
//       }}
//     >
//       <Grid item xs={12} sm={5}>
//         <Box sx={classes.mainItem}>Grid Item 1</Box>
//       </Grid>

//       <Grid item xs={12} sm={7}>
//         <Grid container spacing={1}>
//           <Grid item xs={12}>
//             <Box sx={classes.wideItem}>grid item 2</Box>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Box sx={classes.smallItem}>grid item 3</Box>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <Box sx={classes.smallItem2}>grid item 4</Box>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default MyGrid;

// const classes = {
//   mainItem: {
//     height: "100%",
//     // height: "600px",
//     padding: "20px",
//     backgroundImage: `url('/assets/png/image-1.png')`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
//   wideItem: {
//     height: "100%",
//     padding: "20px",
//     backgroundImage: `url('/assets/png/image-2.png')`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     display: "flex",
//   },
//   smallItem: {
//     height: "100%",
//     padding: "20px",
//     backgroundImage: `url('/assets/png/image-3.png')`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
//   smallItem2: {
//     height: "100%",
//     padding: "20px",
//     backgroundImage: `url('/assets/png/image-4.png')`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   },
// };

import React from "react";
import { Grid, Paper } from "@mui/material";

const MyGrid = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        backgroundColor: "orange",
        maxWidth: "1150px",
        maxHeight: "600px",
        height: "100%",
      }}
    >
      <Grid item xs={12} sm={5} sx={{ display: "flex" }}>
        <Paper
          sx={{
            color: "green",
            height: "100%",
            width: "100%",
            // display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          item 1
        </Paper>
      </Grid>

      <Grid item xs={12} sm={7}>
        <Paper
          sx={{
            color: "green",
            height: "500px",
            // height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          item 2
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MyGrid;
