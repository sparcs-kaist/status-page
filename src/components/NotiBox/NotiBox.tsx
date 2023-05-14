import React from 'react'
import { Trans } from 'react-i18next'
import webDeveloperImg from 'assets/images/web_developer.svg'
import styles from './NotiBox.scss'

const i18nSubKey = (() => {
  switch (window.location.hostname) {
    case 'status.sparcs.org':
      return 'serviceStatus'
    case 'otl.sparcs.org':
    case 'otl.kaist.ac.kr':
      return 'maintenance.otl'
    default:
      return 'maintenance'
  }
})()

function NotiBox() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.title}>
          <Trans i18nKey={`NotiBox.${i18nSubKey}.title`}>
            <b />
          </Trans>
        </div>
        <div className={styles.description}>
          <Trans i18nKey={`NotiBox.${i18nSubKey}.description`}>
            <span className={styles.description__small} />
            <b />
            <b className={styles.description__red} />
          </Trans>
        </div>
      </div>
      <img className={styles.img} src={webDeveloperImg} alt="logo" />
    </div>
  )
}

export default NotiBox
