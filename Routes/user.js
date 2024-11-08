import express from "express";
import { v4 as uuidv4 } from "uuid";
import { getUser } from "../Controller/user";

const router = express.Router();

let users = [
    {
        "id": 1,
        "username": "john_doe",
        "email": "john@example.com",
        "role": "user"
    },
    {
        "id": 2,
        "username": "jonny_english",
        "email": "johnny@example.com",
        "role": "user"
    }
];

router.get('/', getUser);

router.post('/user', (req,res) => {
    console.log("User added successfullly");
    const newUser = req.body;
    users.push({...newUser, id: uuidv4()});
});

router.get('/:id', (req,res) => {
    const { id } = req.params;
    const chosen = users.find((user) => user.id === id);
    console.log(chosen);
    res.send(chosen);
});

router.delete('/:id', (req,res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);   
    res.send(`User deleted from the database with id ${id}`); 
});

router.patch('/:id', (req,res) => {
    const { id } = req.params;
    const { username, email, role } = req.body;
    const user = users.find((user) => user.id === id);

    if(username){
        user.username = username;
    }
    if(email){
        user.email = email;
    }
    if(role){
        user.role = role;
    }

    res.send(`User with the id ${id} is updated successfully`);
});

export default router;