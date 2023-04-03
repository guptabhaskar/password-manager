import models from "../../db/models";

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
      const password = await models.password.create(req.body);
      res.json({ success: true, password });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
