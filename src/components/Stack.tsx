import { Box, Chip, Divider, Stack } from "@mui/material";
import React from "react";

export const MUIStack = () => {
  return (
    <Stack
      sx={{ border: "1px solid aqua" }}
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
      divider={
        <Divider orientation="vertical" flexItem>
          <Chip label="Chip" />
        </Divider>
      }
      spacing={1}
    >
      <Box
        width={"30%"}
        height={"25%"}
        p={4}
        bgcolor={"primary.main"}
        sx={{
          transition:
            "background-color 0.15s,color 0.15s,box-shadow 0.15s,font-weight 0.15s",
          cursor: "pointer",
          "&:hover": {
            bgcolor: "secondary.main",
            color: "white",
            boxShadow: "0px 4px 14px aqua",
            fontWeight: "bold",
          },
        }}
      >
        Codevolution
      </Box>
      <Box
        sx={{
          width: "30%",
          height: "25%",
          padding: "32px",
          backgroundColor: "success.main",
        }}
      >
        Hello
      </Box>
    </Stack>
  );
};
