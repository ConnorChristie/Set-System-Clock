"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const dateFormat = require("dateformat");
class WindowsDateTimeControl {
    setDateTime(dateTime) {
        let dateCommand = child_process_1.exec(`date ${dateFormat(dateTime, 'm/d/yyyy')}`);
        let timeCommand = child_process_1.exec(`time ${dateFormat(dateTime, 'HH:MM:ss')}`);
    }
}
exports.default = WindowsDateTimeControl;
