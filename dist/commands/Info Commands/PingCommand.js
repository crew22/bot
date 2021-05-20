"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.run = void 0;
const run = async (client, message, args) => {
    message.channel.send(`Pong! Ms: ${Date.now() - message.createdTimestamp}`);
};
exports.run = run;
exports.config = {
    name: 'ping',
    aliases: ['pong'],
    permission: 'SEND_MESSAGES',
    category: 'other',
    maintenance: false,
};
//# sourceMappingURL=PingCommand.js.map