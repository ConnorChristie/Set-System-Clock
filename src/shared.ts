import { exec as _ } from "child_process";
import { promisify } from "util";
export const exec = promisify(_);
