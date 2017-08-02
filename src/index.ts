import { IDateTimeControl, Controllers } from './shared';

import * as os from 'os';

export class DateTimeControl {
    private dateTimeControl: IDateTimeControl;
    
    constructor() {
        if (!this.isSupported()) {
            return;
        }

        let controller = Controllers[os.platform()];

        this.dateTimeControl = new controller();
    }

    public setDateTime(dateTime: Date) {
        if (!this.isSupported()) {
            return;
        }

        this.dateTimeControl.setDateTime(dateTime);
    }

    private isSupported() {
        if (Controllers[os.platform()] === undefined) {
            console.error('Unsupported system, unable to set system time.');

            return false;
        }

        return true;
    }
}

export default new DateTimeControl();