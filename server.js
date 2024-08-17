import "dotenv/config";
import app from "./src/app.js";

const port = process.env.PORT_BACKEND || 3000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
