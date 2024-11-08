import express  from "express";
import bodyParser from "body-parser";
import userRoute from "./Routes/user";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/user', userRoute);

app.listen(PORT, () => console.log(`Server alive at port: http://localhost:${PORT}`));