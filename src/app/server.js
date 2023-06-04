// const express = require("express");
// const next = require("next");
// const cors = require("cors");

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   // Enable CORS
//   server.use(cors());

//   // Handle all Next.js requests
//   server.all("*", (req, res) => {
//     return handle(req, res);
//   });

//   // Start the server
//   server.listen(4000, (err) => {
//     if (err) throw err;
//     console.log("> Ready on http://localhost:4000");
//   });
// });
