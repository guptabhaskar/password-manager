import models from "../../db/models";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const master_passwords = await models.master.findAll();
      res.json({ success: true, master_passwords });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  } else if (req.method === "POST") {
    try {
      const master_password = await models.master.create(req.body);
      res.json({ success: true, master_password });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
