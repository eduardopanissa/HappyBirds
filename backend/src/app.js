import express from "express";
import db from "./config/dbConnect.js"
import cors from 'cors';
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
    console.log("database connected")
})


const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

routes(app);

export default app;