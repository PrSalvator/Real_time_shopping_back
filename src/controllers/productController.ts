import { PrismaClient } from "@prisma/client";
import { RequestHandler } from "express";

const prisma = new PrismaClient();

export const getProduts: RequestHandler = async (req, res) => {
    try{
        const products = await prisma.product.findMany();
        return res.status(200).json(products);
    }
    catch (err){
        return res.status(500).json({error: "Server error"});
    }
}