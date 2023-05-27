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
    console.log("key: ", key)
    //@ts-ignore
    nextStatus[key] = StatusCode[status[ServiceAlias[key]][status[ServiceAlias[key]].length-1]['status']]
    //@ts-ignore
    if (FixedStatus[key]) {
      //@ts-ignore
      nextStatus[key] = FixedStatus[key]
    }
  }
  return nextStatus
}