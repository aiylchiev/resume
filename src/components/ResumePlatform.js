import React from 'react'
import OneMainContent from './OneMainContent'
import classes from './ResumePlatform.module.css'
import ThreeMainContent from './ThreeMainContent'
import TwoMainContent from './TwoMainContent'
function ResumePlatform() {
    return (
        <main className={classes.mainBlock}>
            <OneMainContent/>
            <TwoMainContent/>
            <ThreeMainContent/>
        </main>
    )
}

export default ResumePlatform
