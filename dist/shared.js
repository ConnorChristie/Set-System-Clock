"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const windows_clock_1 = require("./windows.clock");
const linux_clock_1 = require("./linux.clock");
var Platform;
(function (Platform) {
    Platform["WINDOWS"] = "win32";
    Platform["LINUX"] = "linux";
})(Platform = exports.Platform || (exports.Platform = {}));
exports.Controllers = {
    [Platform.WINDOWS]: windows_clock_1.default,
    [Platform.LINUX]: linux_clock_1.default
};
