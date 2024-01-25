import { Box } from "@mui/material";

export const MUIBox = () => {
  return (
    <>
      <Box
        width={"100%"}
        height={"25%"}
        p={4}
        bgcolor={"primary.main"}
        sx={{
          transition: "background-color 0.15s,color 0.15s,box-shadow 0.15s",
          "&:hover": {
            bgcolor: "secondary.main",
            color: "white",
            boxShadow: "0px 4px 14px aqua",
          },
        }}
      >
        Codevolution
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "25%",
          padding: "32px",
          backgroundColor: "success.main",
        }}
      >
        Hello
      </Box>
    </>
  );
};
