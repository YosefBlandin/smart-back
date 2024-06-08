import pgp from 'pg-promise';
console.log(process.env.DB_CREDENTIALS);
export const db = pgp()(process.env.DB_CREDENTIALS ?? '');
