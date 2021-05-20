"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema_1 = __importDefault(require("./schema"));
const Server = mongoose_1.model('Servers', schema_1.default);
exports.default = Server;
//# sourceMappingURL=index.js.map