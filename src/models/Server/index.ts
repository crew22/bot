import { Snowflake } from "discord.js";
import { Model, model } from "mongoose";
import ServerDocument from "./document";
import ServerSchema from "./schema";

export interface IServerModel extends Model<ServerDocument> {
  // here we decalre statics
  findOneOrCreate(condition: FindOrCreateCondition): Promise<ServerDocument>;
}

export interface IServerDocument extends ServerDocument {
  // also we can declare methods here
}

export type FindOrCreateCondition = {
  id: Snowflake;
}

const Server: IServerModel = model<IServerDocument, IServerModel>("Servers", ServerSchema);

export default Server;
