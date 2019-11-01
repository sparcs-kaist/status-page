import React from 'react'
import styles from './Body.scss'

interface BodyProps {
  children: React.ReactNode
}

function Body({ children }: BodyProps) {
  return <div className={styles.wrapper}>{children}</div>
}

export default Body
