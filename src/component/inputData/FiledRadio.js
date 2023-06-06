import { Box, FormControlLabel, Radio } from '@mui/material'
import React from 'react'

const FiledRadio = () => {
  return (
    <Box sx={{padding:"5px"}}>
  <FormControlLabel
          control={<Radio />}
          label="Top"
          labelPlacement="top"
        />    </Box>
  )
}

export default FiledRadio
