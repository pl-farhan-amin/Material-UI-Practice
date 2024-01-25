import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

export const MUIRadioButton = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target?.value as string);
  };
  console.log({ value });
  return (
    <Stack spacing={4} direction={"column"}>
      <Stack spacing={2} direction={"row"} justifyContent={"center"}>
        <Box width={"16rem"} padding={5} sx={{ border: "2px solid aqua" }}>
          <FormControl
            fullWidth
            color={!value ? "error" : "info"}
            error={!value}
          >
            <FormLabel id="job-experience-label">
              Years of Experience - In Industry
            </FormLabel>
            <RadioGroup
              aria-labelledby="job-experience-label"
              name="job-experience-radio-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                control={<Radio color="secondary" />}
                label="0-2"
                value="0-2"
              />
              <FormControlLabel
                control={<Radio color="secondary" />}
                label="3-5"
                value="3-5"
              />
              <FormControlLabel
                control={<Radio color="secondary" />}
                label="6-10"
                value="6-10"
              />
            </RadioGroup>
            {!value && <FormHelperText>Invalid Selection Made*</FormHelperText>}
          </FormControl>
        </Box>
      </Stack>
    </Stack>
  );
};
