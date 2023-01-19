import express from 'express';

export default class DefaultController {
    public router: express.Router = express.Router();
    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get('/', this.default)
    }

    private async default(req: express.Request, res: express.Response){
        return res.sendStatus(200);
    }
}