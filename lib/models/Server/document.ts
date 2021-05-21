import { Document } from 'mongoose';
import { Snowflake } from 'discord.js';

export interface IServerDocument extends Document {
	id: Snowflake;
	prefix: string;
	language: string;
	log: LogObject;
	counter: CounterObject;
	level: LevelObject;
}

export type LogObject = { enabled: boolean; channel: string };
export type CounterObject = { enabled: Boolean; goal: Number; channel: String };
export type LevelObject = { enabled: Boolean; channel: String };

export default IServerDocument;
