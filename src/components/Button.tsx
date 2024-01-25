import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BoldIcon from "@mui/icons-material/FormatBold";
import UnderlineIcon from "@mui/icons-material/FormatUnderlined";
import ItalicIcon from "@mui/icons-material/FormatItalic";
import { useState } from "react";

export const MUIButton = () => {
  const [formats, setFormats] = useState<string[]>(() => ["bold", "italic"]);

  const handleFormatChange = (
    events: React.MouseEvent<HTMLElement>,
    updatedFormat: string[]
  ) => {
    setFormats(updatedFormat);
  };
  console.log("formats >", formats);
  return (
    <Stack spacing={4} direction={"column"}>
      <Stack spacing={3} direction={"column"} alignItems={"center"}>
        <Typography variant="h4" component="h3">
          All Types of Button Variations
        </Typography>
        <Stack spacing={2} direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" href="http://www.youtube.com" target="_blank">
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </Stack>
      <Stack spacing={3} direction={"column"} alignItems={"center"}>
        <Typography variant="h4" component="h3">
          All Button Colors - Text Variant
        </Typography>
        <Stack spacing={2} direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="info">
            Info
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
        </Stack>
      </Stack>
      <Stack spacing={3} direction={"column"} alignItems={"center"}>
        <Typography variant="h4" component={"h3"}>
          All Button Colors - Outlined Variant
        </Typography>
        <Stack spacing={2} direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
        </Stack>
      </Stack>
      <Stack spacing={3} direction={"column"} alignItems={"center"}>
        <Typography variant="h4" component={"h3"}>
          All Button Colors - Contained Variant
        </Typography>
        <Stack spacing={2} direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Stack>
      </Stack>
      <Stack spacing={3} direction={"column"} alignItems={"center"}>
        <Typography variant="h4" component={"h3"}>
          All Button - Size
        </Typography>
        <Stack spacing={2} direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="contained" color="secondary" size="small">
            Small
          </Button>
          <Button variant="contained" color="secondary" size="medium">
            Medium
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Large
          </Button>
        </Stack>
      </Stack>
      <Stack spacing={3} direction={"column"} alignItems={"center"}>
        <Typography variant="h4" component={"h3"}>
          All Button - with Icons Types
        </Typography>
        <Stack spacing={2} direction={"row"} justifyContent={"space-evenly"}>
          <Button variant="contained" startIcon={<SendIcon />} disableRipple>
            Send
          </Button>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            color="secondary"
            disableElevation
          >
            Send
          </Button>
          <IconButton
            color="warning"
            onClick={() => alert(JSON.stringify({ message: "Hello World" }))}
          >
            <SendIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Stack spacing={3} direction={"column"} alignItems={"center"}>
        <Typography variant="h4" component={"h3"}>
          All Buttons - Button Group
        </Typography>
        <Stack spacing={2} direction={"row"} justifyContent={"space-evenly"}>
          <ButtonGroup
            orientation="horizontal"
            variant="outlined"
            color="info"
            aria-label="ButtonGroup for Paginated Works"
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
      </Stack>
      <Stack spacing={3} direction={"column"} alignItems={"center"}>
        <Typography>All Buttons - Toggle Button with Group Element</Typography>
        <Stack spacing={2} direction={"row"} justifyContent={"space-evenly"}>
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormatChange}
            color="secondary"
            aria-label="toggle selective Icon Buttons"
            size="small"
            orientation="vertical"
          >
            <ToggleButton value="bold" aria-label="bold Icon">
              <BoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic Icon">
              <ItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined Icon">
              <UnderlineIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </Stack>
  );
};
