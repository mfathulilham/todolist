import React from 'react'
import { Button } from 'react-bootstrap'

export default function ButtonBase({variant, handleToggle, children}) {
  return (
    <Button variant={variant} onClick={handleToggle} >
        {children}
    </Button>
  )
}
