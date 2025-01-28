import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import { validateReqData } from "./utils/validateReqData.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const distPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../frontend/dist"
);

app.use(cors({ origin: process.env.ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15min
  max: 100, // liczba req od IP
  message:
    "Too many requests from this IP address. Please try again in 15 minutes.",
});
app.use(limiter);

app.get("/api/helloworld", (req, res) => {
  res.send("HELLO WORLD!!");
});

app.post("/api/send-email", async (req, res) => {
  console.log("test");

  const validationError = validateReqData(req.body);
  if (validationError) {
    return res.status(400).json(validationError);
  }

  const { email, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email || process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject,
      text: `From: ${email}\n\n${text}`,
    });
    res.status(200).json({ message: "MESSAGE SENT" });

    //zwrotka
    await transporter.sendMail({
      from: `"Marcin Ruszkowski" <${process.env.EMAIL_USER}>`,
      to: email,
      replyTo: "void@gmail.com",
      subject: "Potwierdzenie otrzymania wiadomości",
      text: `Dziękuję za kontakt!\n\nOtrzymałem Twoją wiadomość i skontaktuję się z Tobą wkrótce.\n\nPozdrawiam\n Marcin Ruszkowski`,
      html: `
          <p>Dziękuję za kontakt!</p>
          <p>Otrzymałem Twoją wiadomość i skontaktuję się z Tobą wkrótce.</p>
          <p>Pozdrawiam,<br/>Marcin Ruszkowski</p>
          <hr/>
          <p style="color: red; font-style: italic; font-size: 12px;">To wiadomość systemowa. Proszę nie odpowiadać na ten email.</p>
        `,
    });
  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "Sending ERROR" });
  }
});

app.use(express.static(distPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
