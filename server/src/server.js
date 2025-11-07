require('dotenv').config()
const http = require("http");
console.log('Password loaded:', process.env.DB_PASSWORD);
const app = require("./app");
const db = require("./services/db");

const PORT = process.env.port || 8000;
const server = http.createServer(app);

async function startServer() {
  // 1. Check database connection health
  const dbConnected = await db.checkConnection();

  if (!dbConnected) {
    // If the DB connection fails, exit the application
    console.error(
      "Cannot start server without a database connection. Exiting."
    );
    process.exit(1);
  }
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
