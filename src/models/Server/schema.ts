import { Schema } from 'mongoose';
import ServerDocument, { IServerDocument } from './document';
import Server, { FindOrCreateCondition } from './index';
import config from '../../config';

const ServerSchema: Schema = new Schema({
	id: {
		type: String,
		required: true,
		unique: true,
	},
	prefix: {
		type: String,
		default: config.defaultPrefix,
	},
	language: {
		type: String,
		default: config.defaultLanguage,
	},
	log: { enabled: Boolean, channel: String },
	counter: { enabled: Boolean, goal: Number, channel: String },
	level: { enabled: Boolean, channel: String },
});

ServerSchema.statics.findOneOrCreate = async function (
	condition: FindOrCreateCondition
): Promise<IServerDocument> {
	var server = await this.findOne(condition);

	if (!server) server = await this.create(condition);

	return server;
};

export default ServerSchema;
