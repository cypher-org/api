import axios from 'axios';
import { TOKEN } from '../config';
import { ValidateGuildById } from '../utilities/validators';

export const getGuildById = async (id: string) => {
    let isValid = await ValidateGuildById(id);
    if(isValid !== true) return undefined
    
    let guild = await axios({
            "url": `https://discord.com/api/v10/guilds/${id}`,
            "method": "get",
            "headers": {"authorization": `Bot ${TOKEN}`}
    });
    
    let members = await axios({
            "url": `https://discord.com/api/v10/guilds/${guild.data.id}/members`,
            "method": "get",
            "headers": {"authorization": `Bot ${TOKEN}`}
    });
    
    guild.data.members = members.data;
    return guild.data;
}