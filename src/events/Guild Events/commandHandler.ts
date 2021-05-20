import { Message } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { RunEventFunction } from '../../interfaces/Event';
import { getUserAsMember } from '../../utils/Utilities';
import Server from "../../models/Server";

// @ts-ignore
export const run: RunEventFunction = async (client, message: Message) => {

    const guild = await Server.findOneOrCreate({ id: message.guild.id });

    if (message.content.indexOf(guild.prefix) == 0) {
        const args = message.content
            .slice(guild.prefix.length)
            .trim()
            .split(/ +/g);
        const commandName: string = args.shift().toLowerCase();
        let cmd: Command;

        if (client.commands.has(commandName)) {
            cmd = client.commands.get(commandName);
        } else if (client.aliases.has(commandName)) {
            cmd = client.commands.get(client.aliases.get(commandName));
        }

        if (cmd) {
            if (cmd.config.maintenance) return message.channel.send("Command is under maintenance!");
            if (!getUserAsMember(client, message.guild, message.author).permissions.has(cmd.config.permission)) return;

            await cmd.run(client, message, args);
        }
    }

};

export const name = 'message';
