import { platform } from "os";
import setLinux from "./linux.clock";
import setWin from "./windows.clock";

export class DateTimeControl {
	public static async setDateTime(date: Date): Promise<void>;
	public static async setDateTime(date: Date, options?: { useSudo?: boolean }): Promise<void>;
	public static async setDateTime(date: Date, options?: any): Promise<void> {
		return DateTimeControl.setter(date, options);
	}

	public setDateTime = DateTimeControl.setDateTime;

	private static getSetter() {
		switch (platform()) {
			case "win32":
				return setWin;
			case "linux":
				return setLinux;
			default:
				throw new Error("Unsupported operating system, unable to set system time.");
		}
	}
	private static setter = DateTimeControl.getSetter();
}
export default DateTimeControl;
