import React from 'react'
import Alert from 'react-bootstrap/Alert'

export default function NotPartOfDemo () {
  return (
    <Alert className='text-center' variant='danger'>
      <header>
        As this is a Demo app, the current facility is
        <strong className='text-uppercase'> not </strong>
        implemented.  
      </header>
    </Alert>
  )
}