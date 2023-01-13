import express from 'express';
import logger from './utilities/logger';
import client from './utilities/discord_client';
import connect from './database/connect';

export default class App {
    private app: express.Application 
    
    public constructor(controllers: Array<any>){
        this.app = express();

        this.initializeRoutes(controllers);
    }

    private async initializeRoutes(controllers: Array<any>){
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router);
        })
    }

    public listen(port: number) {
        this.app.listen(port, () => {
            (client as any).database = connect();
            logger.info(`APP STATRED AT PORT (${port})`);
        });
    }
}