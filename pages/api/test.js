import { Key } from "../../models/key";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const key = await Key.findOne({
        where: {
          user_id: req.query.user_id,
        },
      });
      res.json({ success: true, key });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "POST") {
    try {
      const hash = await bcrypt.hash(req.body.password, 10);
      await models.key.create({
        user_id: req.body.user_id,
        key: hash,
      });
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
