require("dotenv").config();
const path = require("path");
const express = require("express");
const connectDB = require("./config/connectDB");
const quidproquoRouter = require("./routes/quidproquoRoute");
const Router = require("./routes/userRoute");

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();
//ROUTES
app.use(express.json());
app.use("/api/auth", Router);
app.use("/api/quidproquos", quidproquoRouter);
// app.use("/picture", express.static("uploads"));
// app.use(express.static("../MYPROJECT_GOMYCODE/client/public/uploads")); //here is important thing - no static directory, because all static :)

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "server.js"));
// });

// server static assets if in production
// if (
//   process.env.NODE_ENV === "production" ||
//   process.env.NODE_ENV === "staging"
// ) {

// }

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(
  process.env.PORT,
  console.log(`Server is up and running on http://localhost:${PORT}`)
);
