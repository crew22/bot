import { Guild, GuildMember, User } from 'discord.js';

export var getUserAsMember = (
	guild: Guild,
	user: User
): GuildMember => guild.members.cache.get(user.id);
