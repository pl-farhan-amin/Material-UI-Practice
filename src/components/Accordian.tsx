import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Typography,
} from "@mui/material";

import { ExpandMoreTwoTone as ExpandMoreIcon } from "@mui/icons-material";
import { useState } from "react";

export const MUIAccordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, expandedValue: string) => {
    setExpanded(isExpanded ? expandedValue : false);
  };
  return (
    <Stack width={"50%"} margin={"10% 25%"}>
      <Accordion
        sx={{ width: "80%" }}
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon fontSize="large" />}
        >
          <Typography variant={"h5"} component={"p"} color={"primary"}>
            Accordian 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" textAlign={"justify"} color={"secondary"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, fugit? Repellendus adipisci cumque accusantium sapiente
            officia odio. Cupiditate et officiis tempora ex voluptatibus vero
            commodi quia voluptate perferendis! Qui, voluptatibus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "80%" }}
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon fontSize="large" />}
        >
          <Typography variant={"h5"} component={"p"} color={"primary"}>
            Accordian 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" textAlign={"justify"} color={"secondary"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, fugit? Repellendus adipisci cumque accusantium sapiente
            officia odio. Cupiditate et officiis tempora ex voluptatibus vero
            commodi quia voluptate perferendis! Qui, voluptatibus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ width: "80%" }}
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon fontSize="large" />}
        >
          <Typography variant={"h5"} component={"p"} color={"primary"}>
            Accordian 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2" textAlign={"justify"} color={"secondary"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatum, fugit? Repellendus adipisci cumque accusantium sapiente
            officia odio. Cupiditate et officiis tempora ex voluptatibus vero
            commodi quia voluptate perferendis! Qui, voluptatibus.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
};
