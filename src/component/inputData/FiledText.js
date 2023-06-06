import { Box, FormControl, FormLabel, TextField } from '@mui/material'
import React from 'react'

const FiledText = () => {
  return (
    <>
      <Box sx={{padding:"5px"}}> 
        {/* <FormControl sx={{margin:"5px"}}>
      <FormLabel id="demo-radio-buttons-group-label">Name</FormLabel> */}

      <TextField id="outlined-basic" label="Outlined" variant="outlined" size='small'/>
      {/* </FormControl> */}
      </Box>
    </>
  )
}

export default FiledText
