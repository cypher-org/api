import express from 'express';
import logger from './utilities/logger';

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
            logger.info(`APP STATRED AT PORT (${port})`);
        });
    }
}