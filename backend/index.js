import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const API_URL = process.env.GOOGLE_API_URL;

app.get("/comments", async (req, res) => {
  try {
    const response = await fetch(`${API_URL}?t=${Date.now()}`);
    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = [];
    }

    if (!Array.isArray(data)) data = [];

    res.json(data);
  } catch (err) {
    console.error("Erro no GET /comments:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/comments", async (req, res) => {
  try {
    console.log("POST recebido:", req.body);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const text = await response.text();
    console.log("Resposta do Google Script (POST):", text);
    console.log("POST recebido:", req.body);

    res.json({ ok: true, response: text });
  } catch (err) {
    console.error("Erro no POST /comments:", err);
    res.status(500).json({ error: err.message });
  }
});

// 🔹 app.listen fora de qualquer rota
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Server proxy rodando na porta ${PORT}`);
});
