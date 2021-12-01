import { Request, Response } from "express"
import { connection } from "../data/connection"
import { purchase } from "../types"

export const getSearchPurchases = async (req: Request, res: Response): Promise<void> => {
    try {
        const query = req.query.query || "%"
        const sort = req.query.sort === "name" ? "name" : "id"

        const result = await connection("aula49_exercicio")
            .select()
            .where("user_id", "LIKE", `%${query}%`)
            .orWhere("product_id", "LIKE", `%${query}%`)
            .orderBy(sort)

        const purchase = result.map(toPurchase)

        if (!purchase.length) {
            res.statusCode = 404
            throw new Error("No purchases found")
        }

        res.status(200).send(purchase)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

const toPurchase = (input: any): purchase => {
    return {
        id: input.id,
        user_id: input.user_id,
        product_id: input.product_id,
        quantity: input.quantity
    }
}