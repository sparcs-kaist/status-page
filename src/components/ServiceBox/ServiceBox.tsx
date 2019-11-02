import React from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import { ServiceStatus } from 'consts'
import Link from 'elements/Link'
import Loader from 'elements/Loader'
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
      <div className={styles.status}>
        {status ? (
          <div
            className={classNames(styles.statusText, {
              [styles[`statusText-${status}`]]: status,
            })}
          >
            {t(`serviceStatus.${status}`)}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </Link>
  )
}

export default ServiceBox
