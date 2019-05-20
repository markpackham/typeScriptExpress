import express, { Application, Request, Response } from "express";
import { NextFunction } from "connect";

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  const num: number = add(5, 5);
  res.send("Howdy there number " + num);
});

app.listen(5000, () => console.log("Server running"));
