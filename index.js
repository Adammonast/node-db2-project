// Server Setup
const server = require("./server.js");

// PORT
const PORT = process.env.PORT || 4000;

// PORT listening for Server
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
