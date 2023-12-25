import express from 'express';
import dotenv from 'dotenv';
import { getXataClient } from './xata';
dotenv.config();

const { PORT } = process.env || 3000;

const app = express();
app.use(express.json({ limit: '50mb' }));

const client = getXataClient();

app.get('/', (req, res)=>{
    return res.json({ ok : true});
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

