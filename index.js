import express from 'express';
import Connection from './database/db.js';
import cors from 'cors'
import dotenv from 'dotenv';
import Routes from './routes/route.js';

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({extended: true}));

app.use('/',Routes);

const PORT = process.env.PORT;

Connection();

app.listen(PORT, () => { 
    console.log(`Your server is running successfully on PORT ${PORT}`);
})