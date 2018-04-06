import express from 'express';

import setupLoadModules from './setup/loadModules';
//GraphQL
import setupStartServer from './setup/startServer';

const server = express();

setupLoadModules(server);

//GraphQL

setupStartServer(server);
