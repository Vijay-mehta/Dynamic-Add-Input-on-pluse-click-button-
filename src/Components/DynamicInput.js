import React from 'react'
import TextField from '@mui/material/TextField';



const DynamicInput = (props) => {

const attributes={
    // variant:'outlined',
    ...props,
};

  return (
    
       <TextField {...attributes} />

    
  )
}

export default DynamicInput
