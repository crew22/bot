require('module-alias/register');

import { Config } from '@crew22/lib/interfaces/Config';
import config from '@crew22/config';
import { Bot } from '@crew22/lib/ws/Client';
import path from 'path';

require('dotenv').config({
	path: path.resolve(__dirname, '..', 'config', '.env'),
});

new Bot().start(config as Config);