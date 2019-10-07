import React from 'react'
import logoImg from 'assets/images/sparcs.svg'
import styles from './Header.scss'

function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.header__logo} src={logoImg} alt="logo" />
    </div>
  )
}

export default Header
