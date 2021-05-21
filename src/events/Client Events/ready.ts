import { RunEventFunction } from '@magnet/lib/interfaces/Event';

export const run: RunEventFunction = async (client) => {
	client.logger.success(`${client.user.tag} is now online!`);
};

export const name = 'ready';
