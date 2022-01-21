import React from 'react'
import classes from './MainBlock.module.css'
function OneMainContent() {
    return (
        <div className={classes.mainOne}>
        <div>
        <h1>Summary</h1>
            <p> Junior Frontend разработчик орентированный на результат, увеличённый React и обладающий более 6 месячным опытом, включая создание многоразовых пере используемых UI компонентов и фунциональных компонентов, уверен к удаленной работы и имею большой интерес к Angular js</p>
        </div>
            <div className={classes.priloga}>
                <h4>Adjectives</h4>
                <p>Agile, Experienced, Collaborative, Practical, Skilled</p>
            </div>
        </div>
    )
}
export default OneMainContent;              