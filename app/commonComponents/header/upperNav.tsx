import theme from "@/utils/theme";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const UpperNav = () => {
  return (
    <Box sx={classes.root}>
      <Container sx={classes.container} maxWidth="xl">
        <Box sx={classes.contactContainer}>
          <Box sx={classes.numberContainer}>
            <LocalPhoneOutlinedIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography sx={classes.fontBold}>{`(225) 555-0118`}</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <EmailOutlinedIcon sx={{ mr: 1 }} />
            <Typography sx={classes.fontBold}>
              {`michelle.rivera@example.com`}
            </Typography>
          </Box>
        </Box>
        <Typography sx={classes.followText}>
          {` Follow us and get a change to win 80% off`}
        </Typography>
        <Box sx={classes.socialContainer}>
          <Typography sx={{ ...classes.fontBold, mr: 1 }}>
            {`Follow Us :`}
          </Typography>
          <InstagramIcon fontSize="small" sx={classes.socialIcon} />
          <YouTubeIcon fontSize="small" sx={classes.socialIcon} />
          <FacebookOutlinedIcon fontSize="small" sx={classes.socialIcon} />
          <TwitterIcon fontSize="small" sx={classes.socialIcon} />
        </Box>
      </Container>
    </Box>
  );
};

export default UpperNav;

const classes = {
  root: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    padding: "15px 0",
    display: {
      xs: "none",
      md: "flex",
    },
  },
  fontBold: {
    fontsize: "14px",
    fontWeight: "700",
  },
  numberContainer: { display: "flex", marginRight: "20px" },
  displayFlex: { display: "flex" },
  followText: {
    display: { xs: "none", lg: "block" },
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  contactContainer: {
    display: "flex",
  },
  socialContainer: {
    display: "flex",
    alignItems: "center",
  },
  socialIcon: {
    cursor: "pointer",
    margin: "0 5px",
  },
};
