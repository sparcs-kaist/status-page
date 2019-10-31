import React from 'react'
import { Trans } from 'react-i18next'
import webDeveloperImg from 'assets/images/web_developer.svg'
import styles from './MaintenanceNotiBox.scss'

function MaintenanceNotiBox() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Trans i18nKey="MaintenanceNotiBox.title">
          <b />
        </Trans>
      </div>
      <div className={styles.description}>
        <Trans i18nKey="MaintenanceNotiBox.description">
          <span className={styles.description__small} />
        </Trans>
      </div>
      <img className={styles.img} src={webDeveloperImg} alt="logo" />
    </div>
  )
}

export default MaintenanceNotiBox
