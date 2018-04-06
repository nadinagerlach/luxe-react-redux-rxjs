import express from 'express';

import setupLoadModules from './setup/loadModules';
import setupGraphQL from './setup/graphql';
import setupStartServer from './setup/startServer';

const server = express();

setupLoadModules(server);

setupGraphQL(server);

setupStartServer(server);