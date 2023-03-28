import express from 'express';
import dotenv from "dotenv"
import cors from "cors";
import { routes } from './routes/routes.js';
// import { pool } from './config/connect.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT;
const router = express.Router()

app.use(cors());
app.use(express.json());

routes.forEach((route) => {
    const type = route.type.toLowerCase()
    app.use(route.path, route.component)
    // if (type === "post") {
    //     router.post(route.path, route.component)
    // }
    // if (type === "get") {
    //     router.get(route.path, route.component)
    // }
    // if (type === "patch") {
    //     router.patch(route.path, route.component)
    // }
    // if (type === "delete") {
    //     router.delete(route.path, route.component)
    // }
})

app.listen(PORT, () => console.log(`Server is running on https://localhost:${PORT}`))

