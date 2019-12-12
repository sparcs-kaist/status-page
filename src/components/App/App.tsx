import React, { useEffect, useState } from 'react'
import Header from 'components/Header'
import Body from 'components/Body'
import MaintenanceNotiBox from 'components/MaintenanceNotiBox'
import Services from 'components/Services'
import { buildStatus } from 'utils/status'
import { FixedStatus } from 'consts'
import styles from './App.scss'

function App() {
  const [status, setStatus] = useState(FixedStatus)

  const fetchStatus = async () => {
    try {
      const response = await window.fetch('https://status-api.sparcs.org')
      const { body: newStatus } = await response.json()
      // @ts-ignore
      setStatus(buildStatus(newStatus))
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  useEffect(() => {
    fetchStatus()
  }, [])

  return (
    <div className={styles.wrapper}>
      <Header />
      <Body>
        <MaintenanceNotiBox />
        <Services status={status} />
      </Body>
    </div>
  )
}

export default App
