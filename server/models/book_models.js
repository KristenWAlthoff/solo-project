const { Pool } = require('pg');

const PG_URI = 'postgres://rfuglbqi:r1tiIqzXsAPujM2HmCJbQVG95Xgfiivp@salt.db.elephantsql.com/rfuglbqi';

const pool = new Pool({
    connectionString: PG_URI
})

module.exports = {
    query: (text, params, callback) => {
        console.log('executed query', text);
        return pool.query(text, params, callback);
    }
};