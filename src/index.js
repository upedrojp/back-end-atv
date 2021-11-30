import { ls } from './lib/ls.js';
import express from 'express';


//const express = require('express');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const { address } = req.query;
    
    const result = await ls(address);
    
    res.json(result);
});

app.listen(3000);