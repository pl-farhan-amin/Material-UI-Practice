import {
  Box,
  FormControlLabel,
  FormControl,
  Stack,
  Switch,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

export const MUISwitch = () => {
  const [value, setValue] = useState<boolean>(false);
  const [reasons, setReasons] = useState<string[]>([]);

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event?.target?.checked);
  };

  const handleReasons = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = reasons.indexOf(event?.target?.value);
    if (index === -1) {
      setReasons([...reasons, event?.target?.value]);
    } else {
      setReasons(reasons.filter((reason) => reason !== event?.target?.value));
    }
  };

  return (
    <Stack spacing={4} direction={"column"} justifyContent={"center"}>
      <Box>
        <FormControlLabel
          label={value ? "On" : "Off"}
          control={
            <Switch checked={value} onChange={handleSwitch} color="secondary" />
          }
        />
      </Box>
      <Box width={"16rem"} padding={5} sx={{ border: "2px solid aqua" }}>
        <FormControl
          fullWidth
          color={!reasons.length ? "error" : "info"}
          error={!reasons.length}
        >
          <FormLabel color="secondary" id="reason-to-leave">
            Reason to Leave ({reasons.length} reasons mentioned):
          </FormLabel>
          <FormGroup aria-labelledby="reason-to-leave">
            <FormControlLabel
              label="Salary"
              value="salary"
              control={
                <Switch
                  color="error"
                  checked={reasons.includes("salary")}
                  onChange={handleReasons}
                />
              }
            />
            <FormControlLabel
              label="Culture"
              value="culture"
              control={
                <Switch
                  color="warning"
                  checked={reasons.includes("culture")}
                  onChange={handleReasons}
                />
              }
            />
            <FormControlLabel
              label="Growth"
              value="growth"
              control={
                <Switch
                  color="info"
                  checked={reasons.includes("growth")}
                  onChange={handleReasons}
                />
              }
            />
          </FormGroup>
          {!reasons.length && (
            <FormHelperText>Invalid Selection Made*</FormHelperText>
          )}
        </FormControl>
      </Box>
    </Stack>
  );
};
