import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { Skill } from "../interfaces";

export const MUIAutoComplete = () => {
  const skills = ["HTML", "CSS", "Javascript", "Typescript"];
  const [value, setValue] = useState<string | null>(null);

  const [Skills, setSkills] = useState<string | Skill | null>(null);
  const skillsOptions: Skill[] = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));

  console.log({ Skills });
  return (
    <Stack direction={"column"} spacing={4}>
      <Box width={"16rem"}>
        <Autocomplete
          fullWidth
          options={skills}
          onChange={(
            event: React.SyntheticEvent<Element, Event>,
            updatedValue: string | null
          ) => setValue(updatedValue)}
          value={value}
          renderInput={(params) => (
            <TextField {...params} label="Skills" color="secondary" />
          )}
          freeSolo
        />
      </Box>
      <Box width={"16rem"}>
        <Autocomplete
          fullWidth
          freeSolo
          options={skillsOptions}
          value={Skills}
          onChange={(
            event: React.SyntheticEvent<Element, Event>,
            changeValue: string | Skill | null
          ) => setSkills(changeValue)}
          renderInput={(params) => (
            <TextField {...params} label="Skills" color="warning" />
          )}
        />
      </Box>
    </Stack>
  );
};
