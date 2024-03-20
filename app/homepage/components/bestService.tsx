import { colors } from "@/utils/colors";
import { Typography, Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const bestServiceData = [
  {
    icon: "/assets/png/easy-win.png",
    title: "Easy Wins",
    description: "Get your best looking smile now",
  },
  {
    icon: "/assets/png/concrete.png",
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    icon: "/assets/png/growth.png",
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];

const BestService = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.textContainer}>
        <Typography variant="h6" sx={classes.featText}>
          Featured Products
        </Typography>
        <Typography variant="h5" fontWeight="bold" sx={classes.serviceText}>
          THE BEST SERVICES{" "}
        </Typography>
        <Typography variant="body1" sx={classes.problemText}>
          Problems trying to resolve the conflict between{" "}
        </Typography>
      </Box>
      <Box sx={classes.iconsContainer}>
        {bestServiceData.map((service, index) => (
          <Box sx={classes.iconBox}>
            <Image src={service?.icon} alt="icon" width={72} height={72} />
            <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
              {service?.title}
            </Typography>
            <Typography
              fontWeight="medium"
              sx={{ mt: 2, textAlign: "center" }}
              variant="subtitle2"
            >
              {service?.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default BestService;

const classes = {
  root: {
    mt: 5,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  featText: {
    color: colors.textLight,
  },
  serviceText: {
    color: colors.textPrimary,
  },
  problemText: {
    color: colors.textLight,
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "space-between",
    mt: 10,
    alignItems: "center",
  },
  iconBox: {
    padding: "50px",
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
