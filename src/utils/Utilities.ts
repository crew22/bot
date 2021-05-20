import { Client, Guild, GuildMember, User } from "discord.js";

export var getUserAsMember = (client: Client, guild: Guild, user: User): GuildMember => client.guilds.cache.get(guild.id).members.cache.get(user.id);