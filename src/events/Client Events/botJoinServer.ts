import { Guild } from "discord.js";
import { RunEventFunction } from "../../interfaces/Event";
import Server from "../../models/Server";

// @ts-ignore
export const run: RunEventFunction = async (client, guild: Guild) => {
    console.log("sa");
    await Server.create({ id: guild.id });
}

export const name = "guildCreate";