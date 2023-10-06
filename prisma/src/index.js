import Express from "express";

import productsRouter from "./routes/products.router.js";
import productsRouter from "./routes/products.router.js";


const app = express();

app.user(express.json());


app.user("/api", productsRoutes);
app.user("/api", categoriesRoutes);

app.listen(3000);
console.log('server on port', 3000);