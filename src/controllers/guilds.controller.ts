import express from 'express';
import { PermissionsBitField } from 'discord.js';
import client from '../utilities/discord_client';

export default class GuildsController {
    public path: string = '/guilds';
    public router: express.Router = express.Router();
    constructor(){
        this.initializeRoutes();
    }

    private async initializeRoutes(){
    this.router.get(`${this.path}/search/byid/:id`, this.SearchById)
    }
    
    private async SearchById(req: express.Request<{ id: string }>, res: express.Response){
        let { id } = req.params;
        const guild = await client.guilds.fetch(id);
        res.send(guild);
    }
}