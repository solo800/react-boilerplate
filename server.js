import express from 'express';
import {MongoClient} from 'mongodb';

const port = 3000;
const app = express();
const dbName = 'rgr';
const mongoPath = `mongodb://localhost:27017/${dbName}`;

app.use(express.static('dist'));

app.listen(port);

console.log('server running on port', port);

MongoClient.connect(mongoPath, (err, db) => {
    if (err) {
        throw err;
    }
    console.log(`db connection successful to ${mongoPath}`);
});

app.get('/data/links', (req, res) => {
    MongoClient.connect(mongoPath, (err, db) => {
        if (err) {
            throw err;
        }

        db.collection('links').find({}).toArray((err, links) => {
            if (err) {
                throw err;
            }

            res.json(links);
        });
    });
})