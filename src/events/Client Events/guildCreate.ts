import { Guild } from 'discord.js';
import { RunEventFunction } from '@crew22/lib/interfaces/Event';
import Server from '@crew22/lib/models/Server';

// @ts-ignore
export const run: RunEventFunction = async (client, guild: Guild) => {
	await Server.create({ id: guild.id });
};

export const name = 'guildCreate';
