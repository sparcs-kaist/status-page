import { ServiceStatus, FixedStatus } from 'consts'

interface ServerStatus {
  sso: boolean
  otl: boolean
  ara: boolean
  geoul: boolean
  kono: boolean
  zabo: boolean
  newAra: boolean
}

const getServiceStatus = (run: boolean) => (run ? ServiceStatus.operational : ServiceStatus.stopped)

export const buildStatus = (status: ServerStatus) => {
  const nextStatus = {}
  Object.entries(status).forEach(([service, run]) => {
    // @ts-ignore
    if (FixedStatus[service]) {
      // @ts-ignore
      nextStatus[service] = FixedStatus[service]
    } else {
      // @ts-ignore
      nextStatus[service] = getServiceStatus(run)
    }
  })
  return nextStatus
}
