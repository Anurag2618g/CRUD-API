import express  from "express";
import bodyParser from "body-parser";
import router from "./Routes/user.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', router);

app.listen(PORT, () => console.log(`Server alive at port: http://localhost:${PORT}`));