import { Config } from './interfaces/Config';
import * as config from '../config.json';
import { Bot } from './client/Client';

new Bot().start(config as Config);
