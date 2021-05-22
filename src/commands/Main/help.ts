import { Message } from 'discord.js';
import { CommandConfig, ICommand, LanguageCommandInfo, RunFunction, CommandCategory } from '../../../lib/interfaces/Command';
import { ILanguageService } from '../../../lib/interfaces/Language';
import IServerDocument from '../../../lib/models/Server/document';
import { Bot } from '../../../lib/ws/Client';

export const run: RunFunction = async (client: Bot, message: Message, args: string[], language: ILanguageService, serverData: IServerDocument): Promise<void> => {
	let embed = client.createEmbed({}, message);

	const allowedCategories: CommandCategory[] = ["general", "fun", "moderation", "other"];

	if (allowedCategories.includes(args[0] as CommandCategory)) {
		embed.setTitle(args[0] + " " + language.getWord("commands")).setDescription(language.getMessage("listOfCommands"));
		client.commands.filter(command => command.config.category == args[0]).forEach(command => {
			command = command as ICommand;
			const commandInfo: LanguageCommandInfo = language.getCommandInfo(command.config.name);

			embed.addField(serverData.prefix + command.config.name, commandInfo.description);
		});

		message.channel.send(embed);
	}
	else if (args[0]) {
		const command: ICommand = client.commands.get(args[0]);

		if (!command) {
			message.channel.send(language.getMessage("commandNotFound"))
		} else {
			const commandInfo: LanguageCommandInfo = language.getCommandInfo(command.config.name);

			embed.addField(language.getWord("name") + ":", command.config.name, true)
				.addField(language.getWord("description") + ":", commandInfo.description, true)
				.addField(language.getWord("arguments") + ":", commandInfo.args, true);

			if (command.config.permission != "SEND_MESSAGES") embed.addField(language.getWord("permission") + ":", command.config.permission, true);
			message.channel.send(embed);
		}
	} else {
		message.channel.send(embed);
	}
};

export const config: CommandConfig = {
	name: 'help',
	aliases: ["yardim", "yardım"],
	permission: 'SEND_MESSAGES',
	category: "general",
	maintenance: false
};