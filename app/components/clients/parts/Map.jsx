"use client";

import { Box, Stack, Typography } from "@mui/material";
import map from "./assets/Map.png";
import Tooltip from "@mui/material/Tooltip";
import building from "./assets/1.jpg";
import Skeleton from "@mui/material/Skeleton";
import { useState } from "react";

const locations = [
  { name: "USA" },
  { name: "Russia" },
  { name: "India" },
  { name: "Sri Lanka" },
  { name: "Singapore" },
];

export default function Map() {
  const [viewLocation, setViewLocation] = useState(null);

  return (
    <Stack margin={{ xll: "10px 0 0 0", md: "10px 0 0 0", sm: "15px 0 0 0" }}>
      <Typography
        fontSize={{
          xll: "2.5rem",
          xl: "2.3rem",
          lg: "2rem",
          md: "1.8rem",
          sm: "1.5rem",
        }}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        We'd Love To Hear From You
      </Typography>
      <Typography color={"#F8575A"} textAlign={"center"}>
        We Have Offices And Teams All Around The World.
      </Typography>
      <Box
        margin={{
          xll: "45px auto",
          xl: "30px auto",
          lg: "40px auto",
          md: "30px auto",
          sm: "25px auto",
          xs: "0px auto",
        }}
        sx={{
          width: "90%",
          maxWidth: "900px",
          position: "relative",
          aspectRatio: "3 / 2", // Ensures the map maintains aspect ratio
          backgroundImage: `url(${map.src})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {viewLocation && (
          <Stack
            alignItems={"center"}
            width={"fit-content"}
            sx={{
              border: "1px solid rgba(0,0,0, 0.1)",
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "5px",
              position: "absolute",
              top: "50px",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${building.src})`,
                backgroundSize: "250%",
                backgroundPosition: "center center",
                width: "50px",
                height: "50px",
                borderRadius: "100%",
                marginBottom: "5px",
              }}
            ></Box>
            <Typography fontSize={"1rem"}>
              Sky textiles India Pvt Ltd.
            </Typography>
            <Typography fontSize={"0.9rem"}>{viewLocation || ""}</Typography>
          </Stack>
        )}
        <Tooltip
          title="India"
          onMouseEnter={() => setViewLocation("India")}
          onMouseLeave={() => setViewLocation(null)}
        >
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "43%", // Use percentage values
              right: "27%",
            }}
          />
        </Tooltip>
        <Tooltip
          title="Russia"
          onMouseEnter={() => setViewLocation("Russia")}
          onMouseLeave={() => setViewLocation(null)}
        >
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "33%",
              right: "25%",
            }}
          />
        </Tooltip>
        <Tooltip
          title="USA"
          onMouseEnter={() => setViewLocation("USA")}
          onMouseLeave={() => setViewLocation(null)}
        >
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "40%",
              left: "25%",
            }}
          />
        </Tooltip>
        <Tooltip
          title="Sri Lanka"
          onMouseEnter={() => setViewLocation("Sri Lanka")}
          onMouseLeave={() => setViewLocation(null)}
        >
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "50%",
              right: "26%",
            }}
          />
        </Tooltip>
        <Tooltip
          title="Singapore"
          onMouseEnter={() => setViewLocation("Singapore")}
          onMouseLeave={() => setViewLocation(null)}
        >
          <Skeleton
            sx={{
              cursor: "pointer",
              backgroundColor: "#F8575A",
              height: "25px",
              width: "15px",
              position: "absolute",
              borderRadius: "100%",
              top: "60%",
              right: "17%",
            }}
          />
        </Tooltip>
      </Box>
    </Stack>
  );
}
