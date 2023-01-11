import App from './app';
import DefaultController from './controllers/default.controller';
import GuildsController from './controllers/guilds.controller';

const app = new App([
    new DefaultController(),
    new GuildsController()
]);

app.listen(8080);