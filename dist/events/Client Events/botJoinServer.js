"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = exports.run = void 0;
const Server_1 = __importDefault(require("../../models/Server"));
// @ts-ignore
const run = async (client, guild) => {
    console.log('sa');
    await Server_1.default.create({ id: guild.id });
};
exports.run = run;
exports.name = 'guildCreate';
//# sourceMappingURL=botJoinServer.js.map