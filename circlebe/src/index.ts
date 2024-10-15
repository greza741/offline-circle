import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router/index-route";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.use((req: Request, res: Response) => {
  res.status(500).json({
    message: res.locals.errorMessage,
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
