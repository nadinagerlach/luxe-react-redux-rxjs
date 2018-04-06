import express from 'express';

//LoadMOdules
//GraphQL
import setupStartServer from './setup/startServer';

const server = express();
//LoadMOdules
//GraphQL

setupStartServer(server);
