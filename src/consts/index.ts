export enum ServiceStatus {
  operational = 'operational',
  maintenance = 'maintenance',
  stopped = 'stopped',
  development = 'development',
}

export const FixedStatus = {
  sso: undefined,
  otl: undefined,
  ara: undefined,
  geoul: undefined,
  kono: ServiceStatus.development,
  zabo: undefined,
  newAra: ServiceStatus.development,
}
