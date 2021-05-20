import { Bot } from '../client/Client';
import { Message, PermissionString } from 'discord.js';

export interface RunFunction {
	(client: Bot, message: Message, args: string[]): Promise<any>;
}

export interface Command {
	run: RunFunction;
	config: CommandConfig;
}

export interface CommandConfig {
	name: string;
	category: CommandCategory;
	permission: PermissionString;
	aliases: string[];
	maintenance: boolean;
}

export type CommandCategory = 'moderation' | 'general' | 'other';
