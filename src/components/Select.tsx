import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export const MUISelect = () => {
  const [country, setCountry] = useState<String>("");
  const [countries, setCountries] = useState<String[]>([]);
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [passwordValue, setPasswordValue] = useState<String>("");

  const handleMultiSelectCountry = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event?.target?.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCountry(event?.target?.value as String);
  };

  const handleChangePassword = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPasswordValue(event?.target?.value as String);
  };

  console.log({ country, countries, showPassword, passwordValue });

  return (
    <Stack direction={"column"} spacing={4}>
      <Stack spacing={2} direction={"row"} justifyContent={"center"}>
        <Box width={"16rem"}>
          <TextField
            label="Select Country"
            select
            value={country}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="PAK">Pakistan</MenuItem>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
          </TextField>
        </Box>
      </Stack>
      <Stack spacing={2} direction={"row"} justifyContent={"center"}>
        <Box width={"16rem"}>
          <TextField
            label="Password"
            id="password"
            fullWidth
            color="secondary"
            value={passwordValue}
            error={!passwordValue}
            helperText={
              !passwordValue
                ? "Password Field is Required*"
                : "Do not Share your password to anyone"
            }
            type={showPassword ? "text" : "password"}
            onChange={handleChangePassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <Visibility fontSize="small" />
                    ) : (
                      <VisibilityOff fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Stack>
      <Stack spacing={2} direction={"row"} justifyContent={"center"}>
        <Box width={"16rem"}>
          <TextField
            label="Select Multiple Countries"
            select
            fullWidth
            value={countries}
            onChange={handleMultiSelectCountry}
            SelectProps={{
              multiple: true,
            }}
            size="small"
            color="secondary"
            helperText="Please Select Countries"
          >
            <MenuItem value="PAK">Pakistan</MenuItem>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
          </TextField>
        </Box>
      </Stack>
    </Stack>
  );
};
