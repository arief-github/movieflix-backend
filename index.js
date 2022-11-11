const app = require('./server.js');
const mongodb = require('mongodb');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const Movies = require('./data/movies.js');

async function main() {
    dotenv.config()

    const client = new mongodb.MongoClient(process.env.MOVIEREVIEWS_DB_URI)

    const port = process.env.PORT || 8000;

    try {
        // connect to the MongoDB Cluster
        await client.connect();
        await Movies.injectDB(client);
        app.listen(port, () => {
            console.log('server is running on port:' + port);
        })

    } catch (e) {
        console.error(e);
        process.exit(1)
    }
}

main().catch(console.error);