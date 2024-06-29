import { Box, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Fotter = () => {
  return (
    <>
      <Box
        sx={{ color: "white", textAlign: "center", bgcolor: "#1A1A19", p: 3 }}
      >
        <Box
          sx={{
            "& svg": {
              fontSize: "50px",
              cursor: "pointer",
              me: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Right Reserved &copy; by Restarunt
        </Typography>
      </Box>
    </>
  );
};

export default Fotter;
