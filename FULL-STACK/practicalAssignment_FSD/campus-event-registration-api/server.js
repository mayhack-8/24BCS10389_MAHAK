
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const registrationRoutes = require("./routes/registrationRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Campus Event Registration API running"
    });
});

app.use("/api/registrations", registrationRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
};

startServer();
