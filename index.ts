import express from "express"
import { routes } from "./src/routes";

const app = express();

app.use(express.json());

app.use("/", routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});