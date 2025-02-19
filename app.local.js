const port = 3000;
const app = require("./app");

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
