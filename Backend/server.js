import 'dotenv/config';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import express from "express";
import cors  from "cors";

connectDB();

const Experience = [
    {
    Id: 1,
    CompanyName: "Suretech InfoSoft Pvt. Ltd.",
    Post: "Intern",
    Duration: "Oct 2024 – Mar 2025"
  },
  {
    Id: 2,
    CompanyName: "Suretech InfoSoft Pvt. Ltd.",
    Post: "Software Engineer",
    Duration: "Mar 2025 – Now"
  }
];

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);

// API routes

app.get("/api/getExperience", (req, res) => {
    res.status(200).json({
        "status" : "Success",
        "data"   : Experience,
    });
})

const PORT = 4000;

app.listen(PORT, () => console.log(`The server is running at : http://localhost:${PORT}`));