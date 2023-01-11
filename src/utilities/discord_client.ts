import { Client } from 'discord.js';
import process from 'node:process';

const client = new Client({
    intents: ["Guilds"],
    presence: {
        status: "invisible"
    },
});

client.login(process.env.TOKEN)
export default client;