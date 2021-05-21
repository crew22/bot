import { Message } from 'discord.js';
import { CommandConfig, ICommand, LanguageCommandInfo, RunFunction } from '../../../lib/interfaces/Command';
import { ILanguageService } from '../../../lib/interfaces/Language';
import { Bot } from '../../../lib/ws/Client';

export const run: RunFunction = async (client: Bot, message: Message, args: string[], language: ILanguageService): Promise<void> => {
	const command: ICommand = client.commands.get(args[0]);

	if (!command) return;
	const commandInfo: LanguageCommandInfo = language.getCommandInfo(command.config.name);

	const embed = client.createEmbed({}, message)
		.addField(language.getWord("name") + ":", command.config.name, true)
		.addField(language.getWord("description") + ":", commandInfo.description, true)
		.addField(language.getWord("arguments") + ":", commandInfo.args, true);

	if (command.config.permission != "SEND_MESSAGES") embed.addField(language.getWord("permission") + ":", command.config.permission, true);
	message.channel.send(embed);
};

export const config: CommandConfig = {
	name: 'help',
	aliases: ["yardim", "yardım"],
	permission: 'SEND_MESSAGES',
	category: "general",
	maintenance: false
};