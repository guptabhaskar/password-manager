import models from "../../db/models";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const passwords = await models.password.findAll();
      res.json({ success: true, passwords });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "POST") {
    try {
      const session = await getServerSession(req, res, authOptions);
      if (session) {
        req.body.user_id = session?.user?.id;
        const password = await models.password.create(req.body);
        res.json({ success: true, password });
      }
      res.json({ success: false });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}