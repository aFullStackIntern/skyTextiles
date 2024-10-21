import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

const getTrasformStyles = (isHovered) => ({
  transform: `translateY(${isHovered ? "-100%" : "0"})`,
});

export default function Form({ setShowForm }) {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  return (
    <Stack
      margin={{
        xll: "70px",
        xl: "60px",
        lg: "60px",
        md: "50px",
        smm: "45px",
        sm: "30px",
      }}
      gap={"10px"}
      backgroundColor={"white"}
      padding={"20px"}
      borderRadius={"5px"}
    >
      <Typography
        sx={{ fontSize: "2rem", textAlign: "center", fontWeight: "bold" }}
      >
        Be a part of our family.
      </Typography>
      <Stack
        width={{ xll: "60vw", smm: "60vw", sm: "none" }}
        gap={"10px"}
        alignItems={"center"}
        margin={{ xll: "30px auto", smm: "30px auto", sm: "0px" }}
      >
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          sx={{
            width: "100%",
          }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
        >
          <TextField
            variant="outlined"
            label="First name"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
          <TextField
            variant="outlined"
            label="Last name"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
        </Stack>
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
          sx={{
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
          <TextField
            variant="outlined"
            label="Phone"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
        </Stack>
        <Stack
          direction={{ xll: "row", smm: "row", sm: "column" }}
          justifyContent={"center"}
          gap={{ xll: "20px", smm: "20px", sm: "10px" }}
          sx={{
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            label="Position"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
          <TextField
            variant="outlined"
            label="Notice Period"
            sx={{
              width: { xll: "50%", smm: "50%", sm: "100%" },
            }}
          />
        </Stack>
      </Stack>
      <Stack direction={"row"} gap={"20px"} sx={{ margin: "0 auto" }}>
        <button
          style={{
            color: "black",
            backgroundColor: "white",
            padding: "10px 25px",
            borderRadius: "5px",
            fontWeight: "bold",
            width: "fit-content",
            cursor: "pointer",
            outline: "none",
            border: "1px solid black",
          }}
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
        <a href={`mailto:${email}`}>
          <button
            style={{
              color: "white",
              backgroundColor: "black",
              padding: "10px 25px",
              borderRadius: "5px",
              fontWeight: "bold",
              width: "fit-content",
              cursor: "pointer",
              outline: "none",
              border: "none",
            }}
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            <span className="fancy-button-text-container">
              <span style={getTrasformStyles(isHovered)}>Apply</span>
              <span style={getTrasformStyles(isHovered)}>Apply</span>
            </span>
          </button>
        </a>
      </Stack>
    </Stack>
  );
}
