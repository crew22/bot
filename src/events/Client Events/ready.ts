import { RunEventFunction } from '../../interfaces/Event';
import { Message } from 'discord.js';

export const run: RunEventFunction = async (client) => {
	client.logger.success(`${client.user.tag} is now online!`);
};

export const name = 'ready';
