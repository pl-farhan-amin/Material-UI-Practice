import { Paper, Grid, Stack } from "@mui/material";

export const MUIGrid = () => {
  return (
    <Stack>
      <Grid container spacing={2} flexWrap={"wrap"}>
        <Grid item xs={12}>
          <Paper
            elevation={4}
            sx={{ backgroundColor: "aqua", textAlign: "center" }}
          >
            Header
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper
            elevation={4}
            sx={{ backgroundColor: "aqua", textAlign: "center" }}
          >
            Main
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper
            elevation={4}
            sx={{ backgroundColor: "aqua", textAlign: "center" }}
          >
            Menu
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={4}
            sx={{ backgroundColor: "aqua", textAlign: "center" }}
          >
            Footer
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 1
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 2
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 3
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 4
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 5
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 6
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 7
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 8
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 9
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 10
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 11
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3}>
          Item 12
        </Grid>
      </Grid>
    </Stack>
  );
};
