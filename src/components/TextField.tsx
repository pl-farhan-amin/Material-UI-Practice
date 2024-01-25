import { Stack, TextField, InputAdornment, IconButton } from "@mui/material";
import {
  VisibilityTwoTone as VisibilityIcon,
  VisibilityOffTwoTone as VisibilityOffIcon,
} from "@mui/icons-material";
import { useState } from "react";

export const MUITextField = () => {
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  const [passwordValue, setPasswordValue] = useState<String>("");
  return (
    <Stack direction={"column"} spacing={4}>
      <Stack spacing={2} direction={"row"} justifyContent={"center"}>
        <TextField
          label="First Name"
          name="firstName"
          type="text"
          color="secondary"
          variant="outlined"
        />
        <TextField
          label="First Name"
          name="firstName"
          type="text"
          color="secondary"
          variant="filled"
        />
        <TextField
          label="First Name"
          name="firstName"
          type="text"
          color="secondary"
          variant="standard"
        />
      </Stack>
      <Stack direction={"row"} spacing={2} justifyContent={"center"}>
        <TextField
          label="Email"
          name="email"
          type="text"
          required
          color="warning"
        />
      </Stack>
      <Stack direction={"row"} spacing={2} justifyContent={"center"}>
        <TextField
          type="text"
          helperText="Make Sure This Field isn't editable"
          required
          value={"35202-5316468-3"}
          inputProps={{ readOnly: true }}
          label="cnic"
          variant="filled"
        />
      </Stack>
      <Stack direction={"row"} spacing={2} justifyContent={"center"}>
        <TextField
          label="Amount"
          color="secondary"
          id="amount-scale"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          id="weight-scale"
          color="warning"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
        <TextField
          label="Password"
          id="password"
          color="error"
          type={showPassword ? "text" : "password"}
          error={!passwordValue}
          value={passwordValue}
          helperText={
            !passwordValue
              ? "Password Field is Required!"
              : "Do not Share Your Password with anyone"
          }
          onChange={(e) => setPasswordValue(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <VisibilityIcon fontSize="small" />
                  ) : (
                    <VisibilityOffIcon fontSize="small" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
