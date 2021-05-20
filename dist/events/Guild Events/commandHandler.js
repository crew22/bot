"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = exports.run = void 0;
const Utilities_1 = require("../../utils/Utilities");
const Server_1 = __importDefault(require("../../models/Server"));
// @ts-ignore
const run = async (client, message) => {
    const guild = await Server_1.default.findOneOrCreate({ id: message.guild.id });
    if (message.content.indexOf(guild.prefix) == 0) {
        const args = message.content.slice(guild.prefix.length).trim().split(/ +/g);
        const commandName = args.shift().toLowerCase();
        let cmd;
        if (client.commands.has(commandName)) {
            cmd = client.commands.get(commandName);
        }
        else if (client.aliases.has(commandName)) {
            cmd = client.commands.get(client.aliases.get(commandName));
        }
        if (cmd) {
            if (cmd.config.maintenance)
                return message.channel.send('Command is under maintenance!');
            if (!Utilities_1.getUserAsMember(client, message.guild, message.author).permissions.has(cmd.config.permission))
                return;
            await cmd.run(client, message, args);
        }
    }
};
exports.run = run;
exports.name = 'message';
//# sourceMappingURL=commandHandler.js.map