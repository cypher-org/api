import App from './app';
import GuildsController from './controllers/guilds.controller';

const app = new App([
    new GuildsController(),
]);

app.listen(8080);