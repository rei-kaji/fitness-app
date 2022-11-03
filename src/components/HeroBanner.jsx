import { Box, Typography, Button } from "@mui/material";
import React from "react";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "14rem", xs: "7rem" }, ml: { sm: "5rem" } }}
      position={"relative"}
      p={"2rem"}
    >
      <Typography
        variant="body1"
        color={"var(--main-color)"}
        fontWeight={"600"}
        fontSize={"2rem"}
        mt={{ lg: "-10rem", xs: "0" }}
      >
        Fitness Club
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        fontWeight={"700"}
        sx={{ fontSize: { lg: "4rem", xs: "3.5rem" } }}
        mb={"2rem"}
        mt={"3rem"}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        fontSize={"2rem"}
        lineHeight={"3rem"}
        mb={"3rem"}
      >
        Check out most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "var(--main-color)", padding: "0.8rem" }}
      >
        Explore Execises
      </Button>
      <Typography
        variant="body1"
        color="var(--main-color)"
        fontWeight={600}
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize={"15rem"}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
