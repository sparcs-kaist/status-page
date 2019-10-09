import React from 'react'
import Header from 'components/Header'
import Body from 'components/Body'
import MaintenanceNotiBox from 'components/MaintenanceNotiBox'
import styles from './App.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Body>
        <MaintenanceNotiBox />
      </Body>
    </div>
  )
}

export default App
