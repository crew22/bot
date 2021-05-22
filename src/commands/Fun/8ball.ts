import { Message } from 'discord.js';
import { CommandConfig, RunFunction, ICommand } from '../../../lib/interfaces/Command';
import { ILanguageService } from '../../../lib/interfaces/Language';
import { random, sleep } from '../../../lib/util/general';
import { Bot } from '../../../lib/ws/Client';

export const run: RunFunction = async (client: Bot, message: Message, args: string[], language: ILanguageService): Promise<void> => {
	if (args.length < 1) {
		message.channel.send(language.getMessage("askYourQuestion"))
	} else {
		const msg = await message.channel.send(language.getMessage("thinkingAboutQuestion"));
		await sleep(800);

		msg.edit(msg.content += ".");
		await sleep(800);

		msg.edit(msg.content += ".");
		await sleep(800);

		msg.edit(msg.content += ".");
		await sleep(800);

		switch (random(1, 8)) {
			case 1:
				msg.edit(language.getMessage("withoutDoubt"))
				break;
			case 2:
				msg.edit(language.getMessage("itIsCertain"))
				break;
			case 3:
				msg.edit(language.getMessage("asISeeYes"))
				break;
			case 4:
				msg.edit(language.getMessage("mostLikely"))
				break;
			case 5:
				msg.edit(language.getMessage("askAgainLater"))
				break;
			case 6:
				msg.edit(language.getMessage("betterNotTellNow"))
				break;
			case 7:
				msg.edit(language.getMessage("mySourcesSayNo"))
				break;
			case 8:
				msg.edit(language.getMessage("veryDoubtful"))
				break;
			default:
				break;
		}
	}
}

export const config: CommandConfig = {
	name: '8ball',
	aliases: [],
	permission: 'SEND_MESSAGES',
	category: "fun",
	maintenance: false
};