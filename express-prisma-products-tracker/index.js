const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", require("./api/routes/productRoutes"));

app.listen(PORT, () => console.log(`server running on port ${PORT}...`));
