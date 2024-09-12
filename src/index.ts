import express from "express";
import dotenv from "dotenv";
import { users } from "./__mocks__";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

console.log(users);

app.get("/users", (_, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
