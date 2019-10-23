const models = require("../models")
const bcrypt = require("bcrypt")

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

/** Check password and executes a callback function.
 * 
 * @param {string} password         Password to check.
 * @param {object} userObj               Password from database.
 * @param {*} successCallback       A callback function to run on a success.
 * @param {*} failureCallback       A callback function to run on a failure.
 */
function chkPassword (password, userObj, successCallback, failureCallback) {
    bcrypt.compare(password, userObj.password, (err, same) => {
        if (err) throw err
        if (same) successCallback();
        else failureCallback();
    })
}
 
module.exports = {
    createEntry:createEntry,
    chkPassword:chkPassword
}