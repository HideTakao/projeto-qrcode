import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    const password = await handle();
    console.log(chalk.blue("Password generated:\n"));
    console.log(chalk.yellow(password) + "\n");
}

export default createPassword;