import express from 'express';

export default class BaseController {
    public router: express.Router = express.Router();
    public constructor(protected path: string){
        this.initializeRoutes(path);
    }

     protected initializeRoutes(path: string){
        this.router.get(path, this.default)
    }

    private async default(req: express.Request, res: express.Response){
        return res.sendStatus(200);
    }
}