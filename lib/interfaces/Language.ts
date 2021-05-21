import { Snowflake, User } from "discord.js";

export interface ILanguageService {
    get(key): string;
}

export type LanguageStringParams = {
    userId?: Snowflake,
    guildId?: Snowflake
}