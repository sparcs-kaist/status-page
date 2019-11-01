import React from 'react'
import Header from 'components/Header'
import Body from 'components/Body'
import MaintenanceNotiBox from 'components/MaintenanceNotiBox'
import Services from 'components/Services'
import styles from './App.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Body>
        <MaintenanceNotiBox />
        <Services />
      </Body>
    </div>
  )
}

export default App
