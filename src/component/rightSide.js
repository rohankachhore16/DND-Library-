import React from 'react'
import FiledText from './inputData/FiledText'
import FiledRadio from './inputData/FiledRadio'
import { Box, Typography } from '@mui/material'
import FiledSelect from './inputData/FiledSelect'
import FiledTextArea from './inputData/FiledTextArea'

const RightSide = ({id,name,label,s}) => {
switch(name){
  case  "Text":
    return <FiledText />
    case  "Radio":
      return <FiledRadio/>
      case  "Textarea":
        return <FiledTextArea/>
        case  "Select":
          return <FiledSelect/>
}
  return (
    <Box >
    </Box>
  )
}

export default RightSide
