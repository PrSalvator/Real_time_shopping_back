import express from "express";
import { getProduts } from "../controllers/productController";

export const routes = express.Router();

routes.get("/products", getProduts);
