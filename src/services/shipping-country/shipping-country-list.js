import countries from "./utils/list-countries.js";

const shippingCountryList = async () => {
    countries.forEach(country => {
        console.log(`${country.id} - ${country.name}\n`);
    });
}

export default shippingCountryList