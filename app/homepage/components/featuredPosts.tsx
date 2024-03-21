import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PostCard from "./postCard";

const FeaturedPosts = () => {
  return (
    <Box mt={10}>
      <Typography
        color="primary"
        variant="body2"
        fontWeight="bold"
        textAlign="center"
      >
        Practice Advice
      </Typography>
      <Typography textAlign={"center"} fontWeight="bold" fontSize={40}>
        Featured Posts
      </Typography>
      <Grid container mt={8} spacing={2}>
        {postsData.map((post, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedPosts;

const postsData = [
  {
    title: "Loudest à la Madison #1 (L'integral)",
    tags: ["Google", "Trending", "New"],
    img: "/assets/png/post-1.png",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    title: "Loudest à la Madison #1 (L'integral)",
    tags: ["Google", "Trending", "New"],
    img: "/assets/png/post-2.png",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
  {
    title: "Loudest à la Madison #1 (L'integral)",
    tags: ["Google", "Trending", "New"],
    img: "/assets/png/post-3.png",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
  },
];
