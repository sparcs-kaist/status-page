import React from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import { ServiceStatus } from 'consts'
import Link from 'elements/Link'
import styles from './ServiceBox.scss'

interface ServiceBoxProps {
  className: string
  status: ServiceStatus
  img: string
  href: string
}

function ServiceBox({ className, status, img, href }: ServiceBoxProps) {
  const { t } = useTranslation()
  return (
    <Link href={href} className={classNames(styles.wrapper, className)}>
      <img className={styles.img} src={img} alt="service logo" />
      <div className={classNames(styles.status, styles[`status-${status}`])}>
        {t(`serviceStatus.${status}`)}
      </div>
    </Link>
  )
}

export default ServiceBox
