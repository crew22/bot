import { Snowflake, User } from "discord.js";
import { CommandConfig, LanguageCommandInfo } from "./Command";

export interface ILanguageService {
    getMessage(message: string): string
    getCommandInfo(command: string): LanguageCommandInfo;
    getWord(word: string): string;
}

export interface Language {
    commands: object;
    messages: object;
    words: object;
}

export type LanguageStringParams = {
    userId?: Snowflake,
    guildId?: Snowflake
}