import prompt from "prompt";
import promptSchemaMain from "../../prompts-schema/prompt-schema-main.js";
import createQRCode from "../../services/qr-code/create.js";
import createPassword from "../../services/password/create.js";
import createShippingCountry from "../shipping-country/create.js";

async function createMain() {
    prompt.start();
    prompt.get(promptSchemaMain, async (err, choose) => {
        if (err) {
            console.error(chalk.red("Erro ao obter a entrada do usuário: "), err);
            return;
        }
        if (choose.select === "1") await createQRCode();
        if (choose.select === "2") await createPassword();
        if (choose.select === "3") await createShippingCountry();
    })

}

export default createMain;