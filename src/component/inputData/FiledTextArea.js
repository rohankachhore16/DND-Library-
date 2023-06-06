import { Box, TextField } from '@mui/material'
import React from 'react'

const FiledTextArea = () => {
  return (
    <div>
      <Box sx={{padding:"5px"}}>
      <TextField id="outlined-basic" label="textArea" variant="outlined" size='small' minRows="10" maxRows="20" />


      </Box>
    </div>
  )
}

export default FiledTextArea
 