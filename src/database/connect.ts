import { connect } from 'mongoose';
import process from 'node:process';
import logger from '../utilities/logger';

async function Connect() {
    const uri = process.env.MONGODBURI;
    if(!uri) return;
    const conn = await connect(uri);
    if(conn) logger.info(`Successfully Connected To Database`);
    return conn;
}

export default Connect;