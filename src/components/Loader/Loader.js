import React from 'react'
import classes from './Loader.module.scss'

function Loader () {
return (
    <div className={classes.Container}>
    <div className={classes.Loader}>
    <div className={classes.LoaderDual}></div>
    </div>
    </div>)
}

export default Loader