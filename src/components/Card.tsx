import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { LinkTwoTone as LinkTwoToneIcon } from "@mui/icons-material";

export const MUICard = () => {
  return (
    <Stack
      spacing={2}
      direction={"column"}
      width={"80%"}
      margin={"10%"}
      flexWrap={"wrap"}
    >
      <Grid container rowSpacing={4} columnSpacing={2}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  padding: "9px 16px",
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              component={"img"}
              height={"250"}
              image="https://source.unsplash.com/random"
              alt="unsplash Image"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography
                variant="h5"
                component={"div"}
                gutterBottom
                textAlign={"center"}
              >
                AB Devilliers
              </Typography>
              <Typography
                variant="body2"
                component={"p"}
                color={"text.secondary"}
                textAlign={"justify"}
              >
                AB de Villiers - Wikipedia De Villiers has scored 22 Test and 25
                ODI centuries. He scored his first Test century against England
                in 2005 and his first ODI century against West Indies in 2007.
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                endIcon={<LinkTwoToneIcon fontSize="small" />}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    bgcolor: "secondary.main",
                    color: "white",
                  },
                }}
              >
                Visit Page
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};
