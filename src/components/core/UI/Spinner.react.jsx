import React from 'react'
import VerticalLayout from '../layout/VerticalLayout.react'
import classes from './style/Spinner.module.css'

const Spinner = () => {
  return (
    <VerticalLayout center="middle">
      <div className={classes.Spinner}></div>
    </VerticalLayout>
    
  )
}

export default Spinner
