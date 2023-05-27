import { ServiceStatus, FixedStatus, ServiceAlias } from 'consts'

const StatusCode = {
  '0': ServiceStatus.stopped,
  '1': ServiceStatus.operational,
  '2': ServiceStatus.operational,
  '3': ServiceStatus.maintenance
}

//const getServiceStatus = (run: boolean) => (run ? ServiceStatus.operational : ServiceStatus.stopped)

export const buildStatus = (status: object) => {
  console.log("BuildStatus Started")
  const nextStatus = {}
  // get Services keys
  for (const key of Object.keys(ServiceAlias)) {
    //@ts-ignore
    if (FixedStatus[key]) {
      //@ts-ignore
      nextStatus[key] = FixedStatus[key]
      continue
    }
    //@ts-ignore
    nextStatus[key] = StatusCode[status[ServiceAlias[key]][status[ServiceAlias[key]].length-1]['status']]
    
  }
  return nextStatus
}