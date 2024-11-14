import { User } from 'entity/user.entity';
import { DataSource } from 'typeorm';

export const userProviders = [
  {
    provide: 'USER_PROVIDERS',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];
