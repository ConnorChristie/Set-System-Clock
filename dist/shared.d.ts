import WindowsDateTimeControl from './windows.clock';
export interface IDateTimeControl {
    setDateTime(dateTime: Date): any;
}
export declare enum Platform {
    WINDOWS = "win32",
    LINUX = "linux",
}
export declare const Controllers: {
    [x: string]: typeof WindowsDateTimeControl;
};
