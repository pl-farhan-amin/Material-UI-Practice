import { Stack, Typography } from "@mui/material";
export const MUIFlexbox = () => {
  return (
    <Stack width={"auto"} height={"20%"} margin={"10%"}>
      <Stack
        bgcolor={"#d1e8fc"}
        py={3}
        textAlign={"center"}
        width={"auto"}
        border={"10px solid #2196F3"}
        height={"100%"}
      >
        <Typography variant="h4" component={"p"}>
          Header
        </Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"flex-end"} width={"100%"}>
        <Stack
          direction={"column"}
          bgcolor={"#d1e8fc"}
          py={3}
          textAlign={"center"}
          width={"30%"}
          border={"10px solid #2196F3"}
          height={"auto"}
          borderTop={"none"}
          justifyContent={"center"}
        >
          <Typography variant="h4" component={"p"} textAlign={"center"}>
            Menu
          </Typography>
        </Stack>
        <Stack
          direction={"column"}
          width={"70%"}
          height={"100%"}
          alignItems={"flex-end"}
        >
          <Stack
            display={"inline-flex"}
            direction={"row"}
            width={"100%"}
            justifyContent={"flex-end"}
          >
            <Stack
              bgcolor={"#d1e8fc"}
              py={3}
              textAlign={"center"}
              width={"100%"}
              border={"10px solid #2196F3"}
              height={"20%"}
              borderTop={"none"}
              borderLeft={"none"}
            >
              <Typography variant="h4" component={"p"} textAlign={"center"}>
                Main
              </Typography>
            </Stack>
            <Stack
              bgcolor={"#d1e8fc"}
              py={3}
              textAlign={"center"}
              width={"100%"}
              border={"10px solid #2196F3"}
              height={"20%"}
              borderTop={"none"}
              borderLeft={"none"}
            >
              <Typography variant="h4" component={"p"} textAlign={"center"}>
                Right
              </Typography>
            </Stack>
          </Stack>
          <Stack
            display={"inline-flex"}
            justifyContent={"flex-end"}
            width={"100%"}
            direction={"row"}
          >
            <Stack
              bgcolor={"#d1e8fc"}
              py={3}
              textAlign={"center"}
              width={"100%"}
              border={"10px solid #2196F3"}
              height={"20%"}
              borderTop={"none"}
              display={"inline-flex"}
              borderLeft={"none"}
            >
              <Typography variant="h4" component={"p"} textAlign={"center"}>
                Footer
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
