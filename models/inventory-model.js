const pool = require("../database/")

/* *******************************
* Get all classification data
* ******************************** */
async function getClassifications() {
    return await pool.query("SELECT * FORM public.classification ORDER BY classification_name")   
}

module.exports = {getClassifications}