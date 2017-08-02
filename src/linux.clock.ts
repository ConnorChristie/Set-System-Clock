import { IDateTimeControl } from './shared';

import { exec } from 'child_process';
import * as dateFormat from 'dateformat';

export default class LinuxDateTimeControl implements IDateTimeControl {
    public setDateTime(dateTime: Date) {
        exec(`timedatectl set-ntp false`);
        exec(`date -s "${dateFormat(dateTime, 'mm/dd/yyyy HH:MM:ss')}" --utc`);
        exec(`hwclock -w --utc`);
    }
}