import axios from 'axios';
import { TOKEN } from '../config';

export const ValidateGuildById = async (id: string) => {
    let isValid: boolean = await axios({
            "url": `https://discord.com/api/v10/guilds/${id}`,
            "method": "get",
            "headers": {"authorization": `Bot ${TOKEN}`}
    }).then(() => {
        return true;
    }).catch(() => {
        return false;
    });

    return isValid;
};