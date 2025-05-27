require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for your frontend domain
app.use(
  cors({
    origin: [
      "https://[YOUR_GITHUB_USERNAME].github.io",
      "http://localhost:3000",
    ],
    methods: ["GET"],
  })
);

// News API endpoint
app.get("/api/news", async (req, res) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=(motogp OR wsbk OR "Formula 1" OR F1) AND motorsport&language=en&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
