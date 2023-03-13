import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { TextField } from "@mui/material";


export default function ShortAnswer() {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        sx={{ display: "flex", alignItems: "center" }}
      >
        {/* <ToggleButton value="left" aria-label="left aligned" variant="standard" disabled>
        <FormatAlignLeftIcon />
      </ToggleButton> */}
        {/* <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
    </ToggleButton> */}
        {/* <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
    </ToggleButton> */}
        <ToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon />
        </ToggleButton>
        <h4 style={{fontWeight:"400"}}>Short-Answer Text</h4>
      </ToggleButtonGroup>
      {/* <TextField label="Short-Answer Text"  variant="standard" disabled /> */}
    </>
  );
}