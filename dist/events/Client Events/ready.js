"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = exports.run = void 0;
const run = async (client) => {
    client.logger.success(`${client.user.tag} is now online!`);
};
exports.run = run;
exports.name = 'ready';
//# sourceMappingURL=ready.js.map