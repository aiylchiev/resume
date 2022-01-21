import React from 'react'
import classes from './Header.module.css'
import github from '../../assets/icons/iconmonstr-github-3.svg'
import logo from '../../assets/icons/photo_2022-01-18_15-00-25.jpg'
import logoPhone from '../../assets/icons/icons8-phone.svg'
import homeIcon from '../../assets/icons/icons8-home-screen-50.png'
import gmailIcon from '../../assets/icons/icons8-gmail-logo.svg'
import linkIcon from '../../assets/icons/link.png'

function Navigation() {
    return (
        <nav className={classes.nav}>
        <div className={classes.navInfoLeft}>
        <div className={classes.logo}>
            <img src={logo}/>
        </div>
        <div className={classes.fio}>
        <h1>Айылчиев Сабитжан</h1>
        {/* <h4>Junior Frontend Developer</h4> */}
        <p>02.01.2003</p>
        <p>готов к переезду или стажировкам</p>
        </div>
        </div>
            <div className={classes.rightNavInfo}>
            <div className={classes.home}>
            <img src={homeIcon}/>
                <p>Бишкек, Кыргызстан</p>
                
            </div>
                <div className={classes.rightInfoNumber}>
                <img src={logoPhone}/>
                    <p className={classes.number} href='0706216743'>0706216743</p>
                </div>
                <div className={classes.gmailIcon}>
                    <img src={gmailIcon}/>
                    <p className={classes.gmaila}>a1yl4ievvsake@gmail.com</p>
                </div>
                <div className={classes.rightInfo}>
                <img src={github}/>
                        <a className={classes.github} href="https://github.com/aiylchiev" alt="/">https://github.com/aiylchiev</a>
                </div>
                <div className={classes.linked}>
                    <img src={linkIcon}/>
                    <a className={classes.link} href="https://linktr.ee/link_my_projects">Ссылка на проекты</a>
                </div>
            </div>
        </nav>
    )
}
export default Navigation

