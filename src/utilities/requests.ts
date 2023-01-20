import axios from 'axios';
import { TOKEN } from '../config';

export const getGuildById = async (id: string) => {
    let guild = await axios({
            "url": `https://discord.com/api/v10/guilds/${id}`,
            "method": "get",
            "headers": {"authorization": `Bot ${TOKEN}`}
    }).catch(() => {
        return undefined 
    });
    if(!guild) return undefined;
    
    let members = await axios({
            "url": `https://discord.com/api/v10/guilds/${guild.data.id}/members`,
            "method": "get",
            "headers": {"authorization": `Bot ${TOKEN}`}
    })
    guild.data.members = members.data;
    return guild.data;
}