import { Paper, Stack, Typography } from "@mui/material";

export const MUIPaper = () => {
  return (
    <Paper elevation={4} sx={{ width: "80%", margin: "10%" }}>
      <Stack spacing={2} direction={"column"}>
        <Typography variant="h3" component={"p"} textAlign={"center"}>
          Header
        </Typography>
        <Typography variant="h3" component={"p"} textAlign={"center"}>
          Body
        </Typography>
        <Typography variant="h3" component={"p"} textAlign={"center"}>
          Footer
        </Typography>
      </Stack>
    </Paper>
  );
};
