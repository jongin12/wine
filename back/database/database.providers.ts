import { getDataSource } from 'dataSource';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return getDataSource();
    },
  },
];
