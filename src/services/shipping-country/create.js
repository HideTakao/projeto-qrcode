import prompt from "prompt";
import chalk from "chalk";
import promptSchemaCountry from "../../prompts-schema/prompt-schema-country.js";
import countries from "./utils/list-countries.js";


async function createShippingCountry() {
    prompt.start();
    prompt.get(promptSchemaCountry, (err, choose) => {
        if (err) {
            console.error(err);
            return;
        }

        const selected = countries.find(c => c.id === choose.country);

        console.log(
            "\nVocê selecionou o país: " + chalk.yellowBright`${selected.name}` + "\nFrete de envio: " + chalk.yellowBright`${selected.shipping}`
        );
    });
}

export default createShippingCountry;