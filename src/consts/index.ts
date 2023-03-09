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
  zabo: undefined,
  taxi: undefined,
  kono: ServiceStatus.development,
}
