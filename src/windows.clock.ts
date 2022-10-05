import { exec } from "./shared";
import * as dateFormat from "dateformat";

export default async (dateTime: Date) => {
	await exec(`date ${dateFormat(dateTime, "m/d/yyyy")}`);
	await exec(`time ${dateFormat(dateTime, "HH:MM:ss")}`);
};
