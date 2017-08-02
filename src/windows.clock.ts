import { IDateTimeControl } from './shared';

import { exec } from 'child_process';
import * as dateFormat from 'dateformat';

export default class WindowsDateTimeControl implements IDateTimeControl {
    public setDateTime(dateTime: Date) {
        exec(`date ${dateFormat(dateTime, 'm/d/yyyy')}`);
        exec(`time ${dateFormat(dateTime, 'HH:MM:ss')}`);
    }
}