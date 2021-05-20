"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../../config"));
const ServerSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    prefix: {
        type: String,
        default: config_1.default.defaultPrefix,
    },
    language: {
        type: String,
        default: config_1.default.defaultLanguage,
    },
    log: { enabled: Boolean, channel: String },
    counter: { enabled: Boolean, goal: Number, channel: String },
    level: { enabled: Boolean, channel: String },
});
ServerSchema.statics.findOneOrCreate = async function (condition) {
    var server = await this.findOne(condition);
    if (!server)
        server = await this.create(condition);
    return server;
};
exports.default = ServerSchema;
//# sourceMappingURL=schema.js.map