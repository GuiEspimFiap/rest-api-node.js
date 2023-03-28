import express from 'express';
import dotenv from "dotenv"
import cors from "cors";
import { pool } from './config/connect.js';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config()

pool.connect((err) => {
    if (err) throw err
    console.log("Success connection")
})

