export const endpointsEnum = {
  EARNING: {
    CREATE: '/earning',
    UPDATE: '/earning',
    DELETE: '/earning/{id}',
    GET_BY_ID: '/earning/{id}',
    GET_LIST: '/earnings',
  },
  SPENDING: {
    CREATE: '/earning',
    UPDATE: '/earning',
    DELETE: '/earning/{id}',
    GET_BY_ID: '/earning/{id}',
    GET_LIST: '/earnings',
  },
} as const;
