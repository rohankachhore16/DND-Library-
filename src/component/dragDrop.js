import React, { useState } from "react";
import { inputList } from "./inputData";
import ListItem from "./listItem";
import RightSide from "./rightSide";
import { useDrop } from "react-dnd";
import { configure } from "@testing-library/react";

const DragDrop = () => {
  const [listInput, setListInput] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "input",
    drop: (item) => addInputToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addInputToBoard = (id) => {
    const inputList = inputList.filter((item) => id === item.id);
    setListInput((listInput) => [...listInput, inputList[0]]);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div className="list">
          {inputList.map((item) => {
            return <ListItem id={item.id} name={item.name} />;
          })}
        </div>

        <div ref={drop}>
          {listInput.map((item) => {
            return <RightSide id={item.id} name={item.name} />;
          })}
        </div>
      </div>
    </>
  );
};

export default DragDrop;
