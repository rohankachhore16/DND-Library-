import React from 'react'
import { inputList } from './inputData'
import { Box, Typography } from '@mui/material'
import { useDrag } from 'react-dnd'
import ListItem from './listItem'

const LeftText = () => {

 
  return (
    <>

     <Box sx={{border:"1px solid black",p:3,maxHeight:"200px"}}>
<Typography variant='h3'> Input Text </Typography>
      {inputList.map((item)=>{
        return (
  <ListItem id={item.id} name={item.name} />
        )
      })}
     </Box>
    </>
  )
}

export default LeftText
