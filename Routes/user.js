import express from "express";
// import { v4 as uuidv4 } from "uuid";

const router = express.Router();

user = [];

router.get('/', (req,res) => {
    console.log(user);
    res.send(user);
});