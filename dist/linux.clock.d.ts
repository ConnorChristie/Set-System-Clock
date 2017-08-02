import { IDateTimeControl } from './shared';
export default class LinuxDateTimeControl implements IDateTimeControl {
    setDateTime(dateTime: Date): void;
}
