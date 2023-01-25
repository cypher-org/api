import express from 'express';
import { getGuildById } from '../utilities/requests';
import { GuildReply } from '../types';
import BaseController from '../base/controller';

export default class GuildsController extends BaseController {
    public constructor(path: string){
        super(path);
    }

    protected override initializeRoutes(path: string) {
    this.router.get(`${path}/:id`, this.SearchById)
    }
    
    private async SearchById(req: express.Request<{ id: string }>, res: express.Response) {
        let { id } = req.params;
        let guild = await getGuildById(id);
        let reply: GuildReply = {
            "status": 200, 
            "message": "OK", 
            "guild": guild
        };
        if(!guild) {
            reply.status = 404
            reply.message = "Unknown Guild"
        };
        
        res.send(reply);
    }
}