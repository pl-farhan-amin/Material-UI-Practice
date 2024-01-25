import { BookmarkBorderTwoTone, BookmarkTwoTone } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Stack,
} from "@mui/material";
import { useState } from "react";

export const MUICheckbox = () => {
  const [value, setValue] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event?.target?.value);
    if (index === -1) {
      setSkills([...skills, event?.target?.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event?.target?.value));
    }
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked as boolean);
  };

  console.log({ skills });
  return (
    <Stack spacing={4} direction={"column"} justifyContent={"center"}>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox checked={value} onChange={handleCheck} color="warning" />
          }
        />
      </Box>
      <Box>
        <FormControlLabel
          label={!value ? "Bookmark for future notes" : "Bookmarked"}
          control={
            <Checkbox
              icon={<BookmarkBorderTwoTone />}
              checkedIcon={<BookmarkTwoTone />}
              checked={value}
              onChange={handleCheck}
              size="small"
              color="success"
            />
          }
        />
      </Box>
      <Box>
        <FormControl error={!skills.length}>
          <FormLabel color={skills.length ? "secondary" : "error"}>
            Skills ({skills.length} skills marked)
          </FormLabel>
          <FormGroup row>
            <FormControlLabel
              value="html"
              label="HTML"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                  color="warning"
                />
              }
            />
            <FormControlLabel
              value="css"
              label="CSS"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                  color="info"
                />
              }
            />
            <FormControlLabel
              value="js"
              label="JavaScript"
              control={
                <Checkbox
                  checked={skills.includes("js")}
                  onChange={handleSkillChange}
                  color="success"
                />
              }
            />
          </FormGroup>
          {!skills.length && (
            <FormHelperText>Invalid Selection*</FormHelperText>
          )}
        </FormControl>
      </Box>
    </Stack>
  );
};
