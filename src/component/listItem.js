import { Typography } from "@mui/material";
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import RightSide from "./rightSide";
const ListItem = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "input",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(name),
    }),
  }));


  return (
    <>
      <Typography ref={drag} variant="body2">
        {name}
      </Typography>
    </>
  );
};

export default ListItem;
