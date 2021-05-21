import consola, { Consola } from 'consola';
import {
	Client,
	MessageEmbedOptions,
	Message,
	Intents,
	Collection,
	MessageEmbed,
} from 'discord.js';
import glob from 'glob';
import { promisify } from 'util';
import { Command } from '../interfaces/Command';
import { Event } from '../interfaces/Event';
import { Config } from '../interfaces/Config';
import DatabaseManager from '../util/DatabaseManager';

const globPromise = promisify(glob);

class Bot extends Client {
	public logger: Consola = consola;
	public commands: Collection<string, Command> = new Collection();
	public aliases: Collection<string, string> = new Collection();
	public events: Collection<string, Event> = new Collection();
	public config: Config;
	private databaseManager: DatabaseManager = new DatabaseManager(
		process.env.MONGO_URI
	);

	public constructor() {
		super({
			ws: { intents: Intents.ALL },
			messageCacheLifetime: 180,
			messageCacheMaxSize: 800,
			messageEditHistoryMaxSize: 800,
			messageSweepInterval: 180,
		});
	}

	public async start(config: Config): Promise<void> {
		this.databaseManager.connect();

		this.config = config;

		const commandFiles: string[] = await globPromise(
			__dirname + '/../../src/commands/**/*{.ts,.js}'
		);

		commandFiles.map(async (value: string) => {
			const file: Command = await import(value);

			this.commands.set(file.config.name, file);
			file.config.aliases.forEach((alias: string) => {
				this.aliases.set(alias, file.config.name);
			});
		});

		const eventFiles: string[] = await globPromise(
			__dirname + '/../../src/events/**/*{.ts,.js}'
		);

		eventFiles.map(async (value: string) => {
			const file: Event = await import(value);
			this.events.set(file.name, file);

			this.on(file.name, file.run.bind(null, this));
		});

		this.login(process.env.BOT_TOKEN);
	}
	public createEmbed(
		options: MessageEmbedOptions,
		message: Message
	): MessageEmbed {
		return new MessageEmbed({ ...options, color: 'BLUE' }).setFooter(
			`${message.author.tag} | ${this.user.username}`,
			message.author.displayAvatarURL({ format: 'png', dynamic: true })
		);
	}
}

export { Bot };
