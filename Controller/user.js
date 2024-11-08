import { v4 as uuidv4 } from "uuid";

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

export const getUser =  (req,res) => {
    console.log(users);
    res.send(users);
}

export const createUser = (req,res) => {
    console.log("User added successfullly");
    const newUser = req.body;
    users.push({...newUser, id: uuidv4()});
}

export const fetchUser = (req,res) => {
    const { id } = req.params;
    const chosen = users.find((user) => user.id === id);
    console.log(chosen);
    res.send(chosen);
}

export const deleteUser = (req,res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);   
    res.send(`User deleted from the database with id ${id}`); 
}

export const updateUser = (req,res) => {
    const { id } = req.params;
    const { username, email, role } = req.body;
    const user = users.find((user) => user.id === id);
    if(username) user.username = username;
    if(email) user.email = email;
    if(role) user.role = role; 
    res.send(`User with the id ${id} is updated successfully`);
}