export const endpointsEnum = {
  EARNING: {
    CREATE: '/v1/earning',
    UPDATE: '/v1/earning',
    DELETE: '/v1/earning/{id}',
    GET_BY_ID: '/v1/earning/{id}',
    GET_LIST: '/v1/earnings',
  },
  SPENDING: {
    CREATE: '/v1/spending',
    UPDATE: '/v1/spending',
    DELETE: '/v1/spending/{id}',
    GET_BY_ID: '/v1/spending/{id}',
    GET_LIST: '/v1/spendings',
  },
} as const;
