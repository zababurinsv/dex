import fs from "fs";
import path from "path";
let __dirname = path.dirname(process.argv[1]);
import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors";
import Enqueue from "express-enqueue";
import compression from "compression";
const highWaterMark =  2;
import whitelist from './whitelist/whitelist.mjs'
import config from './config.mjs'
import mongo from "./db/mongo/mongo.mjs";
import formidableMiddleware from "express-formidable";

const account = `/3N8n4Lc8BMsPPyVHJXTivQWs7ER61bB7wQn`

let app = express();
app.use(compression())
app.use(cors({ credentials: true }));
app.use(formidableMiddleware());
const queue = new Enqueue({
    concurrentWorkers: 4,
    maxSize: 200,
    timeout: 30000
});
app.use(queue.getMiddleware());
let corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.options('/dex', cors(corsOptions))
app.post('/dex', cors(corsOptions),async (req, res) => {
    let item = await mongo['set']({
        input:'mongo',
        model:'dex',
        type:'item',
        data: {
            id:req.fields['id'],
            object:req.fields['object'],
            dex:JSON.parse(req.fields['dex'])
        }
    },'set', 'type')
    res.json(item)
})
app.options('/dex', cors(corsOptions))
app.get('/dex',   cors(corsOptions), async (req, res) => {
    let dex = await mongo['get']({
        input:'mongo',
        model:'dex',
        type:'items'
    },'get', 'type')

    res.send(dex);
})
app.options('/delete-item', cors(corsOptions))
app.delete('/delete-item', cors(corsOptions), async (req, res) => {
    let del = await mongo({
        input:'mongo',
        model:'dex',
        type:'items'
    },'delete', 'type')
    res.json('true')
})


app.use( express.static('docs'));
app.use( express.static('static'));

app.options('/import', cors(corsOptions))
app.get('/import', async (req, res) => {
    res.sendFile('/docs/import.html', { root: __dirname });
})

app.options('/*', cors(corsOptions))
app.get('/*', async (req, res) => {
    res.sendFile('/docs/index.html', { root: __dirname });
})
app.use(queue.getErrorMiddleware())
export default app

