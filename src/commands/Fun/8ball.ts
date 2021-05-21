import { Message } from 'discord.js';
import { CommandConfig, RunFunction, ICommand } from '../../../lib/interfaces/Command';
import { ILanguageService } from '../../../lib/interfaces/Language';
import { random } from '../../../lib/util/general';
import { Bot } from '../../../lib/ws/Client';

export const run: RunFunction = async (client: Bot, message: Message, args: string[], language: ILanguageService): Promise<void> => {
	switch (random(1, 8)) {
		case 1:
			message.channel.send(language.getMessage("withoutDoubt"))
			break;
		case 2:
			message.channel.send(language.getMessage("itIsCertain"))
			break;
		case 3:
			message.channel.send(language.getMessage("asISeeYes"))
			break;
		case 4:
			message.channel.send(language.getMessage("mostLikely"))
			break;
		case 5:
			message.channel.send(language.getMessage("askAgainLater"))
			break;
		case 6:
			message.channel.send(language.getMessage("betterNotTellNow"))
			break;
		case 7:
			message.channel.send(language.getMessage("mySourcesSayNo"))
			break;
		case 8:
			message.channel.send(language.getMessage("veryDoubtful"))
			break;
		default:
			break;
	}
};

export const config: CommandConfig = {
	name: '8ball',
	aliases: [],
	permission: 'SEND_MESSAGES',
	category: "fun",
	maintenance: false
};