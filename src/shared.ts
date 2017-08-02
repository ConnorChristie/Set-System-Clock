import WindowsDateTimeControl from './windows.clock';
import LinuxDateTimeControl from './linux.clock';

export interface IDateTimeControl {
    setDateTime(dateTime: Date);
}

export enum Platform {
    WINDOWS = 'win32',
    LINUX = 'linux'
}

export const Controllers = {
    [Platform.WINDOWS]: WindowsDateTimeControl,
    [Platform.LINUX]: LinuxDateTimeControl
};