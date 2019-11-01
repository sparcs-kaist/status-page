import React from 'react'
import classNames from 'classnames'
import styles from './Link.scss'

interface LinkProps {
  className: string
  href: string
  children: React.ReactNode
}

function Link({ className, children, href }: LinkProps) {
  return (
    <a href={href} className={classNames(styles.wrapper, className)}>
      {children}
    </a>
  )
}

export default Link
