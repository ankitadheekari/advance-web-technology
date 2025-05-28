const express = require("express");
const { PrismaClient } = require("@prisma/client");
const path = require("path");

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/quotes", (req, res) => {
    try {
        const quotes = prisma.quote.findMany();
        res.json(quotes);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// API route to add a new quote
app.post("/quotes", (req, res) => {
    const { text, author } = req.body;

    if (!text || !author) {
        return res.status(400).json({ error: "Text and author are required" });
    }

    try {
        const newQuote = prisma.quote.create({
            data: { text, author },
        });
        res.status(201).json(newQuote);
    } catch (error) {
        res.status(500).json({ error: "Failed to create quote" });
    }
});

app.listen(3000, () => {
    console.log(`Server is running`);
});
