import express from 'express';

export default class GuildsController {
    public path: string = '/guilds';
    public router: express.Router = express.Router();
    constructor(){
        this.initializeRoutes();
    }

    private async initializeRoutes(){
        
    }
}