import { Config } from './interfaces/Config';
import config from './config';
import { Bot } from './client/Client';
import path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, 'config', '.env') });

new Bot().start(config as Config);
