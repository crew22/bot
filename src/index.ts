require('module-alias/register');

import { Config } from '@magnet/lib/interfaces/Config';
import config from '@magnet/config';
import { Bot } from '@magnet/lib/ws/Client';
import path from 'path';

require('dotenv').config({
	path: path.resolve(__dirname, '..', 'config', '.env'),
});

new Bot().start(config as Config);
