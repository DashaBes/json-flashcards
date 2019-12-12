import React from 'react'
import VerticalLayout from '../layout/VerticalLayout.react'
import classes from './style/Sidebar.module.css';

const Sidebar = ({children}) => {
  return (
    <div className={classes.Sidebar}>
        <VerticalLayout center="horizontal">
          {children}
        </VerticalLayout>
    </div>
  )
}

export default Sidebar
