import { Request, Response } from "express";
import { users } from "../__mocks__";
import { User } from "../types";

export function getUsers(req: Request, res: Response) {
  res.send(users);
}

export function getUserById(req: Request<{ id: string }>, res: Response) {
  try {
    const userId = req.params.id;
    const user = users.find((user) => user.id === Number(userId));

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export function createUser(req: Request<{}, {}, User>, res: Response) {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const user: User = {
      id: users.length + 1,
      name,
      email,
    };

    users.push(user);
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
}
