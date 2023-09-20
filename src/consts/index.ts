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
  sso: ['10'],
  otl: ['9', '28'],
  ara: ['7', '35'],
  geoul: ['18'],
  home: ['17'],
  zabo: ['8', '34'],
  taxi: ['12', '29'],
  kono: ['27'],
}
