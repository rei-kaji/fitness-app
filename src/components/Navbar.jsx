import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      sx={{
        gap: { sm: "10rem", xs: "2rem" },
        mt: { sm: "3rem", xs: "2rem" },
        justifyContent: "none",
      }}
      px={{ lg: "2rem", xs: "0" }}
    >
      <Link to={"/"}>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "3rem", height: "3rem", margin: "0 2rem" }}
        />
      </Link>
      <Stack
        direction={"row"}
        gap={"4rem"}
        fontSize={"1.5rem"}
        alignItems={"flex-end"}
      >
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "var(--sub-color)",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "var(--sub-color)",
            cusor: "pointer",
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
