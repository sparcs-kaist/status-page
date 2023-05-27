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

export const ServiceAlias = {
  sso: '10',
  otl: '9',
  ara: '7',
  geoul: '18',
  home: '8',
  zabo: '8',
  taxi: '12',
  kono: '27',
}
