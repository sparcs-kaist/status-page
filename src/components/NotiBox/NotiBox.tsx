import React, { useMemo } from 'react'
import { Trans } from 'react-i18next'
import webDeveloperImg from 'assets/images/web_developer.svg'
import styles from './NotiBox.scss'

function NotiBox() {
  const i18nSubKey = useMemo(() => {
    switch (window.location.hostname) {
      case 'status.sparcs.org':
        return 'serviceStatus'
      case 'zabo.sparcs.org':
        return 'development'
      default:
        return 'maintenance'
    }
  }, [])

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
          </Trans>
        </div>
      </div>
      <img className={styles.img} src={webDeveloperImg} alt="logo" />
    </div>
  )
}

export default NotiBox
