const http = require("http");

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Correct way to set status code
  res.setHeader("Content-Type", "text/plain"); // Sets the response header
  res.end("Hello, World! Your server is running \n");
});

server.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}`);
});
