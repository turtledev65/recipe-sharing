declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    BETTER_AUTO_SECRET: string;
    BETTER_AUTH_URL: string;
  }
}
