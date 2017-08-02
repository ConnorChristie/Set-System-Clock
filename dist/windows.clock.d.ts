import { IDateTimeControl } from './shared';
export default class WindowsDateTimeControl implements IDateTimeControl {
    setDateTime(dateTime: Date): void;
}
