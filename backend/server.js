const app = require("./app");
const dotenv = require("./dotenv");

//Config

dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.port, () => {
  console.log(`Server is running on http://localhost:${process.env.port}`);
});
