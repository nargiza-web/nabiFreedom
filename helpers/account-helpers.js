const models = require("../models")

/** Creates a new entry in a specified table.
 * 
 * @param {string} modelName         Name of the sequelize model representing the table to insert to.
 * @param {{column: value}} obj      An object with columns as keys and values to insert.
 * @param {*} successCallback        A callback function to run on a successful insertion.
 * @param {*} failureCallback        A callback function to run on an unsuccessful insertion.
 */
function createEntry (modelName, obj, successCallback, failureCallback) {
    models[modelName].create(obj)
    .then(successCallback)
    .catch(failureCallback)
}

module.exports = {
    createEntry:createEntry
}