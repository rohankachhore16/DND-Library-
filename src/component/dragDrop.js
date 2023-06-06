import React, { useState } from "react";
import { inputList } from "./inputData";
import ListItem from "./listItem";
import { useDrop } from "react-dnd";
import RightSide from "./rightSide";
import { Box, Grid, Stack } from "@mui/material";
import LeftText from "./leftText";
import RightText from "./rightText";
import FiledText from "./inputData/FiledText";

const DragDrop = () => {
 
  
  return (
    <>

       <Stack display="flex" justifyContent="space-around" direction="row" >
<LeftText/>
<RightText/>
</Stack>
    </>
  );
};

export default DragDrop;
