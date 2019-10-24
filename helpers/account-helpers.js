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
 * @param {object} userObj          Password from database.
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

/** Gets an entry from the database and perform a callback function.
 * 
 * @param {string} modelName            Name of the sequelize model representing the table to search.
 * @param {{column: value}} searchObj   Object to search for.     
 * @param {*} callback                  A callback function to perform. 
 */
function getEntry (modelName, searchObj, callback) {
    models[modelName].findOne({
        where:searchObj
    })
    .then(callback)
    .catch((reason) => {
        throw new Error(reason)
    })

}

function redirectIfNotSignedIn(req, res, next) {
    let userSession = req.session.user
    if (userSession && userSession.isAuthenticated) next();
    else res.redirect("/account/login")
}

function redirectIfSignedIn(req, res, next) {
    let userSession = req.session.user
    if (!userSession || !userSession.isAuthenticated) next();
    else res.redirect("/account/dashboard")
}
 
module.exports = {
    createEntry:createEntry,
    chkPassword:chkPassword,
    getEntry:getEntry,
    redirectIfNotSignedIn:redirectIfNotSignedIn,
    redirectIfSignedIn:redirectIfSignedIn
}