"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slotocrash_server_1 = require("./games/slotocrash/slotocrash_server");
const rgs_1 = require("./libs/server/rgs");
const port = "8080";
const server = new rgs_1.RGS(new slotocrash_server_1.SlotocrashServer());
server.start(port);
//# sourceMappingURL=index.js.map