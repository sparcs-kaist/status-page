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
  home: undefined,
  kono: ServiceStatus.development,
  zabo: ServiceStatus.development,
  newAra: ServiceStatus.development,
}
