import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideo, name }) => {
  //   console.log(exerciseVideo);
  //   if (!exerciseVideo.length) return "loading...";
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px" color="initial">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      {!exerciseVideo ? (
        <Loader />
      ) : (
        <Stack
          justifyContent={"flex-start"}
          flexWrap={"wrap"}
          alignItems={"center"}
          sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: 0 } }}
        >
          {exerciseVideo?.slice(0, 3).map((item) => (
            <a
              key={item.video.videoId}
              className="exercise-video"
              href={`https://www.youtube.com//watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.video.thumbnails[0].url}
                style={{ borderTopLeftRadius: "20px" }}
                alt={item.video.title}
              />
              <Box>
                <Typography
                  sx={{ fontSize: { lg: "28px", xs: "18px" } }}
                  fontWeight={600}
                  color="#000"
                >
                  {item.video.title}
                </Typography>
                <Typography fontSize="14px" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default ExerciseVideos;
