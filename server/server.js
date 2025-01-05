import express from "express";


const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

const port = 3000;

app.listen(3000, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
