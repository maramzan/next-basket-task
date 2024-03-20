import { Box, Typography } from "@mui/material";
import React from "react";

const FeaturedPosts = () => {
  return (
    <Box>
      <Typography color="primary">Practice Advice</Typography>
      <Typography>Featured Posts</Typography>
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
