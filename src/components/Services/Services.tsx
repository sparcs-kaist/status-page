import React from 'react'
import { useTranslation } from 'react-i18next'
import ServiceBox from 'components/ServiceBox'
import araImg from 'assets/images/services-ara.svg'
import otlImg from 'assets/images/services-otl.svg'
import ssoImg from 'assets/images/projects-sso.svg'
import geoulImg from 'assets/images/services-geoul.svg'
import zaboImg from 'assets/images/services-zabo.svg'
import newaraImg from 'assets/images/projects-new-ara.svg'
import konoImg from 'assets/images/services-kono.svg'
import { ServiceStatus } from 'consts'
import styles from './Services.scss'

function Services() {
  const { t } = useTranslation()
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{t('Services.title')}</div>
      <div className={styles.serviceContainer}>
        <ServiceBox
          className={styles.serviceBox}
          href="http://ara.sparcs.org"
          img={araImg}
          status={ServiceStatus.operational}
        />
        <ServiceBox
          className={styles.serviceBox}
          href="https://otl.kaist.ac.kr"
          img={otlImg}
          status={ServiceStatus.operational}
        />
        <ServiceBox
          className={styles.serviceBox}
          href="https://sparcssso.kaist.ac.kr"
          img={ssoImg}
          status={ServiceStatus.operational}
        />
        <ServiceBox
          className={styles.serviceBox}
          href="http://ftp.sparcs.org"
          img={geoulImg}
          status={ServiceStatus.operational}
        />
        <ServiceBox
          className={styles.serviceBox}
          href="https://zabo.sparcs.org"
          img={zaboImg}
          status={ServiceStatus.development}
        />
        <ServiceBox
          className={styles.serviceBox}
          href="https://ara-beta.sparcs.org"
          img={newaraImg}
          status={ServiceStatus.development}
        />
        <ServiceBox
          className={styles.serviceBox}
          href="http://kono.sparcs.org/"
          img={konoImg}
          status={ServiceStatus.development}
        />
      </div>
    </div>
  )
}

export default Services
