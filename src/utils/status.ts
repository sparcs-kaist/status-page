import { ServiceStatus, FixedStatus, ServiceAlias } from 'consts'
import { StatusInterface } from 'consts'

interface kumaStatus { // 2023-09-20
  [key: string]: Array<{
    status: string
    time: string
    msg: string
    ping: string
  }>
}

const StatusCode: StatusInterface = {
  '0': ServiceStatus.stopped,
  '1': ServiceStatus.operational,
  '2': ServiceStatus.operational,
  '3': ServiceStatus.maintenance
}

export const buildStatus = (status: kumaStatus) => {
  const nextStatus: StatusInterface = {}
  
  for (const ServiceName of Object.keys(ServiceAlias)) {
    if (FixedStatus[ServiceName]) {
      nextStatus[ServiceName] = FixedStatus[ServiceName]
      continue
    }
    
    for (const StatusID of ServiceAlias[ServiceName]) {
      if (!nextStatus[StatusID] || nextStatus[StatusID] === ServiceStatus.operational) {
        if (!status[StatusID]) // Check if the service is not exist
          nextStatus[StatusID] = ServiceStatus.stopped
        else 
          nextStatus[ServiceName] = StatusCode[status[StatusID][status[StatusID].length-1].status]
        continue
      }
    }
  }
  return nextStatus
}