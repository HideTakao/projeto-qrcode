import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE, 2 - PASSWORD ou 3 - Frete)"),
        pattern: /^[1-3]+$/,
        message: chalk.red.italic("Digite uma opção válida"),
        required: true,
    }
];

export default promptSchemaMain;