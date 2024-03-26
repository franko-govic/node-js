import Express from "express";

const app = Express();

app.get('/',(req, res) => {
  res.send("Hello Wold!");
});

app.get('/test',(req, res) => {
  res.send("Hello Wold test!");
});

app.listen(3000, () => {
  console.log("Server started on port http://localhost:3000");
});
