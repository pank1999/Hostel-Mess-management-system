interface IDatabaseConfig {
  development: {
    username: string;
    password: string;
    database: string;
    host: string;
    port: number;
    dialect: string;
  };
  test: {
    username: string;
    password: string;
    database: string;
    host: string;
    port: number;
    dialect: string;
  };
  production: {
    username: string;
    password: string;
    database: string;
    host: string;
    port: number;
    dialect: string;
  };
}

export const DataBaseConfig: IDatabaseConfig = {
  development: {
    username: 'dev-user-1',
    password: 'dev-user@123',
    database: 'db-dev',
    host: 'localhost',
    port: 5434,
    dialect: 'postgres',
  },
  production: {
    username: 'prod-user-1',
    password: 'prod-user@123',
    database: 'db-prod',
    host: 'localhost',
    port: 5434,
    dialect: 'postgres',
  },
  test: {
    username: 'test-user-1',
    password: 'test-user@123',
    database: 'db-test',
    host: 'localhost',
    port: 5434,
    dialect: 'postgres',
  },
};
