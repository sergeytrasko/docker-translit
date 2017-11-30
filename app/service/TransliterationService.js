const toTransliterationOption = require("../model/Option");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const getTransliterationOptions = async () => {
    const {stdout} = await exec("translit -l");
    const transliterations = stdout.split("\n").splice(2);
    return transliterations.filter(t => !!t).map(toTransliterationOption);
};

const transliterate = async (option, text) => {
    //TODO escape text and option properly
    const {stdout} = await exec(`echo "${text}" | translit -t "${option}"`);
    return stdout;
};

module.exports = {
    getTransliterationOptions,
    transliterate
};