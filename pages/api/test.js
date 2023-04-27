import models from "../../db/models";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const key = await models.key.findOne({
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
  }
}
