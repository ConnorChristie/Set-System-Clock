import { exec, getDateFormat } from "./shared";
import * as dateFormat from "dateformat";

export default async (dateTime: Date) => {
	await exec(`date ${dateFormat(dateTime, await getDateFormat)}`);
	await exec(`time ${dateFormat(dateTime, "HH:MM:ss")}`);
};
