type Environment = {
  port: number;
  typeorm: {
    host: string;
    username: string;
    password: string;
    database: string;
    port: number;
  };
};

export const envs = (): Environment => {
  return {
    port: Number(process.env.PORT),
    typeorm: {
      host: process.env.TYPEORM_HOST,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      port: Number(process.env.TYPEORM_PORT),
    },
  };
};

export default {
  folder: '.env',
};
