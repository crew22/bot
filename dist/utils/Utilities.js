"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAsMember = void 0;
var getUserAsMember = (client, guild, user) => client.guilds.cache.get(guild.id).members.cache.get(user.id);
exports.getUserAsMember = getUserAsMember;
//# sourceMappingURL=Utilities.js.map