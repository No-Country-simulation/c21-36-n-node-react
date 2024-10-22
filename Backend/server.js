const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cookie-parser")
const db = require("./api/config/dbConfig")
const cookieParser = require("cookie-parser")
const routes = require("./api/routes/index")
const models = require("./api/models/index")
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({origin:"http://localhost:3001", CredentialsContainer:true}))
app.use(cookieParser())
app.use("/api",routes)

db.sync({ force: false })
  .then(() => {
    app.listen(8000, () =>
      console.log("Servidor levantado en el puerto 8000👻")
    );
  })
  .catch((err) => console.error(err));

module.exports = app;