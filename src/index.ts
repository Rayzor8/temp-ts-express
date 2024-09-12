import express from "express";
import dotenv from "dotenv";
import usersRouter from "./routes/users";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); 
app.use('/api/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
