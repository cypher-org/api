import { connect } from 'mongoose';
import process from 'node:process';

async function Connect() {
    const uri = process.env.MONGODBURI;
    if(!uri) return;
    const conn = await connect(uri);
    return conn;
}

export default Connect;