import { exec } from "./shared";
import * as dateFormat from "dateformat";

export default async (dateTime: Date, options?: { useSudo?: boolean }) => {
	const sudo = options?.useSudo ? "sudo" : "";

	await exec(`${sudo} timedatectl set-ntp false`);
	await exec(`${sudo} date -s "${dateFormat(dateTime, "UTC:mm/dd/yyyy HH:MM:ss")}" --utc`);
	await exec(`${sudo} hwclock -w --utc`);
};
