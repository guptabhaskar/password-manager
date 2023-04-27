import { Password } from "../../models/password";
import { Key } from "../../models/key";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";
import CryptoJS from "crypto-js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const session = await getServerSession(req, res, authOptions);
      if (session) {
        const passwords = await Password.findAll({
          where: {
            user_id: session?.user?.id,
          },
        });
        res.json({ success: true, passwords });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "POST") {
    try {
      const session = await getServerSession(req, res, authOptions);
      if (session) {
        const key = await Key.findOne({
          where: {
            user_id: session?.user?.id,
          },
        });
        const body = {
          ...req.body,
          user_id: session?.user?.id,
          password: CryptoJS.AES.encrypt(req.body.password, key.key).toString(),
        };
        const password = await Password.create(body);
        res.json({ success: true, password });
      } else {
        res.json({ success: false });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
