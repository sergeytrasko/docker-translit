module.exports = t => {
    const tokens = t.split(",");
    const id = tokens[0].trim();
    const reversible = tokens[1].trim() === "reversible";
    const description = tokens.splice(2).join(", ");
    return {
        id, reversible, description
    };
};