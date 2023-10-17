module.exports = {
    beforeCreate(event) {
        const { data } = event.params;

        data.Description += "::TEST";
    }
}