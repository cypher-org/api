import express from 'express';
import { getGuildById } from '../utilities/requests';
import { GuildReply } from '../types/';

export default class GuildsController {
    public path: string = '/guilds';
    public router: express.Router = express.Router();
    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.SearchById)
    }
    
    private async SearchById(req: express.Request<{ id: string }>, res: express.Response) {
        let { id } = req.params;
        let guild = await getGuildById(id);
        let reply: GuildReply = { "status": 200, "message": "Good", "guild": guild};
        if(!guild) {
            reply.status = 404,
            reply.message = "Unknown Guild"
        };
        res.send(reply);     
   
    }
}