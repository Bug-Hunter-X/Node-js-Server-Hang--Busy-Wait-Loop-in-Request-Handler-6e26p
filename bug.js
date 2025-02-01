const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation
  const start = Date.now();
  let isDone = false;
  while (!isDone) {
    if (Date.now() - start > 5000) {
      isDone = true;
    }
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});