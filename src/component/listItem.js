import React from "react";
import { useDrag, useDrop } from "react-dnd";
const ListItem = ({ id, name }) => {
  
const [{isDragging},drag] = useDrag(()=>({
type:"input",
item:{id:id},
collect:(monitor)=>({
  isDragging:!!monitor.isDragging(),
})

}));
  return (
    <>
      <ul>
        <li ref={drag}>{name}</li>
      </ul>{" "}
    </>
  );
};

export default ListItem;
