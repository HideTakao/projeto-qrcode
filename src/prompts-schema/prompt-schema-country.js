import chalk from "chalk";
import countries from "../services/shipping-country/utils/list-countries.js";

const countryOptions = countries.map((c) => `${c.id} - ${c.name}`).join("\n");

const promptSchemaCountry = [
    {
        name: "country",
        description: chalk.yellow.bold("Selecione um País\n") + chalk.blue.italic(countryOptions + "\n"),
        pattern: /^[1-countries.legth]+$/,
        message: chalk.red.italic("Digite uma opção válida"),
        required: true,
    }
];

export default promptSchemaCountry;