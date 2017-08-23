import { IDateTimeControl } from './shared';

import { exec } from 'child_process';
import * as dateFormat from 'dateformat';

export default class LinuxDateTimeControl implements IDateTimeControl {
    public setDateTime(dateTime: Date, options: any) {
        let sudo = options.useSudo ? 'sudo ' : '';

        exec(`${sudo}timedatectl set-ntp false`);
        exec(`${sudo}date -s "${dateFormat(dateTime, 'UTC:mm/dd/yyyy HH:MM:ss')}" --utc`);
        exec(`${sudo}hwclock -w --utc`);
    }
}