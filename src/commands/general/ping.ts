import { CommandConfig, RunFunction } from '@crew22/lib/interfaces/Command';

export const run: RunFunction = async (client, message, args) => {
	message.channel.send(`Pong! Ms: ${Date.now() - message.createdTimestamp}`);
};

export const config: CommandConfig = {
	name: 'ping',
	aliases: ['pong'],
	permission: 'SEND_MESSAGES',
	category: 'other',
	maintenance: false,
};
