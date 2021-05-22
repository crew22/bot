import { Bot } from '../ws/Client';
import { Message, PermissionString } from 'discord.js';
import { ILanguageService } from './Language';
import IServerDocument from '../models/Server/document';

export interface RunFunction {
	(client: Bot, message: Message, args: string[], language: ILanguageService, server: IServerDocument): Promise<any>;
}

export interface ICommand {
	config: CommandConfig;
	run(client: Bot, message: Message, args: string[], language: ILanguageService, server: IServerDocument): Promise<any>;
}

export interface CommandConfig {
	name: string;
	category: CommandCategory;
	permission: PermissionString;
	aliases: string[];
	maintenance: boolean;
	description?: string;
	args?: string[];
}

export interface LanguageCommandInfo {
	description: string;
	args: string[];
}

export type CommandCategory = 'moderation' | 'general' | 'other' | "fun";