import React from 'react'
import classes from './ResumePlatform.module.css'
function TwoMainContent() {
    return (
        <div>
        <h4 className={classes.soft}>Soft Skils</h4>
            <ul className={classes.ull}>
                <li>Комуникативные навыки, общения </li>
                <li>Опыт удалённый работы</li>
                <li>Решение проблем</li>
                <li>Критическое мышление</li>
            </ul>
            <div className={classes.summaryBlock}>
        <h1>Skills</h1>
        <div className={classes.basilSlils}>
        <h4>Языки программирования</h4>
        <p>JavaScript, HTML, CSS</p>
        <h4>Фреймворки и технологии</h4>
        <p>React js, Redux js, redux toolkit,redux thunk, redux saga, bootstrap, fair base, Git, <br/> Routing, Fetch</p>
        </div>
        <div className={classes.zanitost}>
            <p><b>Занятость:</b> Полная занятость</p>
            <p><b>График работы:</b> Полный день</p>
        </div>
        </div>
        </div>
    )
}
export default TwoMainContent