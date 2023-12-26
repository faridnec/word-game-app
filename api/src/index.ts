import express from 'express';
import dotenv from 'dotenv';
import { getXataClient } from './xata';
import { cardsCapitals, cardsProgramming, sets } from './seed_database';
dotenv.config();

const { PORT } = process.env || 3000;

const app = express();
app.use(express.json({ limit: '50mb' }));

const client = getXataClient();

app.get('/init', async (req, res)=>{
    const seedSets = sets;
    const seedCardsCapitals = cardsCapitals;
    const seedCardsProgramming = cardsProgramming;

    await client.db.sets.create(seedSets);
    await client.db.cards.create(seedCardsCapitals);
    await client.db.cards.create(seedCardsProgramming);

    return res.json({ ok: true});
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
})

