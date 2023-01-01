import React from 'react'
import Button from '@mui/material/Button';


const DynamicButton = (props) => {

    const attributes={
        ...props
    }
  return (
    <Button {...attributes}/>

  )
}

export default DynamicButton
