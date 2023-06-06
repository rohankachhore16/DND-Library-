import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const FiledSelect = () => {
  return (
    <>
      <Box sx={{ padding: "5px" }}>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
      </Box>
    </>
  );
};

export default FiledSelect;
