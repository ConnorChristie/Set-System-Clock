import { exec as execCallback } from "child_process";
import { promisify } from "util";
export const exec = promisify(execCallback);

export const getDateFormat = new Promise<string>((res) => {
	let s = "";
	const console = execCallback("date");
	console.stdout?.on("data", (str: string) => {
		s += str;
		if (s.length === 69) {
			console.kill();
			res(s.slice(59, -2));
		}
	});
});
