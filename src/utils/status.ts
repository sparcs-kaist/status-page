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
  for (const ServiceName of Object.keys(ServiceAlias)) {
    // @ts-ignore
    if (FixedStatus[ServiceName]) {
      // @ts-ignore
      nextStatus[ServiceName] = FixedStatus[ServiceName]
      continue
    }
    // @ts-ignore
    for (const StatusID of ServiceAlias[ServiceName]) {
      // @ts-ignore
      if (!nextStatus[StatusID] || nextStatus[StatusID] === ServiceStatus.operational) {
        // @ts-ignore
        if (!status[StatusID]) {
          // @ts-ignore
          nextStatus[StatusID] = ServiceStatus.stopped
        } else {
          // @ts-ignore
          nextStatus[StatusID] = StatusCode[status[StatusID][status[StatusID].length-1]['status']]
        }
        continue
      }
    }
  }
  return nextStatus
}