import express from 'express';
import passport from 'passport';
import cors from 'cors';
import cookieSession from 'cookie-session';
import swaggerUI from 'swagger-ui-express';
import YAML from 'yamljs';
import './middleware/passport/google';
import './middleware/passport/facebook';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cookieSession({
    name: 'imigani_session',
    keys: ['1key', '2key'],
  })
);

app.use('/api', routes);
app.get('/', (req, res) => {
  res.json({ message: 'Imigani API', linkToAPIDocs: '/api-docs' });
});

app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(YAML.load('./src/documentation/swagger.yaml'))
);
export default app;
