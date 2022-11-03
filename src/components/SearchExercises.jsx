import { Stack, Typography, Box, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({
  setExercises,
  setBodyPart,
  bodyPart,
  setCurrentPage,
}) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.includes(search) ||
          exercise.target.includes(search) ||
          exercise.equipment.includes(search) ||
          exercise.bodyPart.includes(search)
      );
      // console.log(exercisesData);

      setSearch("");
      setCurrentPage(1);
      setExercises(searchedExercises);
      window.scrollTo({ top: "1900", behavior: "smooth" });
    }
  };
  return (
    <Stack
      alignItems={"center"}
      mt={"3rem"}
      justifyContent={"center"}
      p={"2rem"}
    >
      <Typography
        variant="body1"
        color="initial"
        fontWeight={700}
        sx={{ fontSize: { lg: "3.5rem", xs: "2.5rem" } }}
        mb={"5rem"}
        textAlign="center"
      >
        Awesome Exercises
        <br /> You Should Know{" "}
      </Typography>
      <Box mb={"6rem"} position={"relative"}>
        <TextField
          id=""
          label=""
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder={"Search Exercises"}
          height={"76px"}
          type={"text"}
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "70rem", xs: "300px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
            // ml: { xs: "-3.5rem" },
          }}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "var(--main-color)",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "1.5rem", xs: "1rem" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
