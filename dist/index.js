"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("./shared");
const os = require("os");
class DateTimeControl {
    constructor() {
        if (!this.isSupported()) {
            return;
        }
        let controller = shared_1.Controllers[os.platform()];
        this.dateTimeControl = new controller();
    }
    setDateTime(dateTime) {
        if (!this.isSupported()) {
            return;
        }
        this.dateTimeControl.setDateTime(dateTime);
    }
    isSupported() {
        if (shared_1.Controllers[os.platform()] === undefined) {
            console.error('Unsupported system, unable to set system time.');
            return false;
        }
        return true;
    }
}
module.exports = new DateTimeControl();
