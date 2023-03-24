import express from "express";
import cors from "cors";
import careersRoutes from "./routes/careers.routes.js";
import studentsRoutes from "./routes/students.routes.js";
import tokenRoutes from "./routes/token.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/', tokenRoutes);
app.use('/api/',careersRoutes);
app.use('/api/',studentsRoutes);

export default app;