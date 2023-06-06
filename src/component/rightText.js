import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import { inputList } from './inputData';
import RightSide from './rightSide';

const RightText = () => {
  const [filed,setFiled] = useState("")
   const [listInput, setListInput] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "input",
    drop: (item) => addInputToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addInputToBoard = (id) => {
    const InputList = inputList.filter((item) => id === item.id);
    setListInput((listInput) => [...listInput, InputList[0]]);
  };

  return (
    <>
<Box ref={drop} sx={{border:"1px solid black",p:3}}>
<Typography variant='h3'>Input </Typography>

{listInput.map((item)=>{
  return (
    <RightSide id={item.id} name={item.name} />
  )
})}

</Box>
    </>
  )
}

export default RightText
