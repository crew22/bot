import { RunEventFunction } from '@crew22/lib/interfaces/Event';

export const run: RunEventFunction = async (client) => {
	client.logger.success(`${client.user.tag} is now online!`);
};

export const name = 'ready';
