import models from "../../db/models";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const key = await models.key.findOne({
        where: {
          user_id: req.query.userId,
        },
      });
      res.json({ exists: key ? true : false });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
