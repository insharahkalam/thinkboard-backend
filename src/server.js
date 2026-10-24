// import dns from 'dns'
// dns.setServers(['8.8.8.8', '1.1.1.1'])

// import express from "express"
// import cors from "cors"
// import dotenv from "dotenv";
// dotenv.config()
// import notesRoutes from "./routes/notesRoutes.js"
// import { connectDB } from "./config/db.js";

// const app = express();
// app.use(express.json())

// app.use(
//     cors({
//         origin: ["http://localhost:5173", "https://thinkboard-frontend-pink.vercel.app"],
//     })
// );

// app.get("/", (req, res) => {
//     res.send("API is running...");
// });

// app.use("/api/notes", notesRoutes)


// connectDB()

// app.listen(process.env.PORT, () => {
//     console.log("server is running in port:", process.env.PORT);
// })


import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://thinkboard-frontend-pink.vercel.app"
    ],
    credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.use("/api/notes", notesRoutes);

connectDB();

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port:", process.env.PORT || 3000);
});