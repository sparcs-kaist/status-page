import React, { useEffect, useState } from 'react'
import Header from 'components/Header'
import Body from 'components/Body'
import NotiBox from 'components/NotiBox'
import Services from 'components/Services'
import { buildStatus } from 'utils/status'
import { FixedStatus, ServiceAlias } from 'consts'
import styles from './App.scss'

function App() {
  const [status, setStatus] = useState(FixedStatus)

  const fetchStatus = async () => {
    
    const response = await window.fetch('https://status.manage.sparcs.org/api/status-page/heartbeat/default')
    const { heartbeatList: newStatus } = await response.json()

    console.log(newStatus)
    // @ts-ignore
    setStatus(buildStatus(newStatus))
  }

  useEffect(() => {
    fetchStatus()
  }, [])

  return (
    <div className={styles.wrapper}>
      <Header />
      <Body>
        <NotiBox />
        <Services status={status} />
      </Body>
    </div>
  )
}

export default App
