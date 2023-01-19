import process from 'node:process';
import connect from './database/connect';

export const { TOKEN } = process.env;
export const database = connect();