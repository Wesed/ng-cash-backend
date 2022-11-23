import * as express from "express"
import * as bodyParser from "body-parser"
import { AppDataSource } from "./data-source"
import routes from "./routes";
const cors = require('cors');


const app = express();
AppDataSource.initialize();

// const whitelist = ["http://localhost:3000", "https://ngcash-backend.herokuapp.com/"]
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error("Not allowed by CORS"))
//     }
//   },
//   credentials: true,
// }
// app.use(cors(corsOptions))
app.use(cors())


app.use(bodyParser.json());
app.use(routes);


app.listen(process.env.PORT || 5000);