import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRouter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: ["https://bangladeshsrisingstars.com", "https://www.bangladeshsrisingstars.com"],
    //origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));


app.use("/api", apiRouter);
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});



/*
Hey Developer!
I hope you are doing well whoever is looking at my code right now. I was given a very short time to complete the task and I tried my best to complete it in time. So I have some short comings in these project. I will list them below:
    1. The store is not properly prepared

That's it in my opinion. I hope you like my code.
*/