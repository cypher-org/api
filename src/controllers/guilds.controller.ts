import express from 'express';
import { PermissionsBitField } from 'discord.js';
import { APIRepliesInterface } from '../types/api';
import client from '../utilities/discord_client';

export default class GuildsController {
    public path: string = '/guilds';
    public router: express.Router = express.Router();
    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes() {
    this.router.get(`${this.path}/search/byid/:id`, this.SearchById)
    }
    
    private async SearchById(req: express.Request<{ id: string }>, res: express.Response) {
        let { id } = req.params;
        let guild = client.guilds.cache.get(id);
        let reply: APIRepliesInterface = { "status": 200, "message": guild };
        if(!guild) {
            reply.status = 404,
            reply.message = "Unknown Guild"
        };
       res.status(reply.status).send({ "message": reply.message });
    }
}