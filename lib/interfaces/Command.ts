import { Bot } from '../ws/Client';
import { Message, PermissionString } from 'discord.js';
import { ILanguageService } from './Language';

export interface RunFunction {
	(client: Bot, message: Message, args: string[], language: ILanguageService): Promise<any>;
}

export interface ICommand {
	config: CommandConfig;

	run(client: Bot, message: Message, args: string[], language: ILanguageService): Promise<any>;
}

export interface CommandConfig {
	name: string;
	category: CommandCategory;
	permission: PermissionString;
	aliases: string[];
	maintenance: boolean;
}

export type CommandCategory = 'moderation' | 'general' | 'other' | "fun";
