const { Pool } = require("pg")
console.log(process.env.DB_PASSWORD)
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  max: 20,
  idleTimeoutMillis: 30000,
})

// Optional: Log connection events for debugging
pool.on("connect", () => {
  console.log("PostgreSQL client connected.")
})

pool.on("error", (err) => {
  console.error("Unexpected error on idle PostgreSQL client", err)
  process.exit(-1) // Exit process if the pool errors
})

module.exports = {
  // Export the pool instance
  pool,

  // Method to acquire a single client from the pool (used in routes)
  query: (text, params) => pool.query(text, params),

  // Method to check the connection health
  checkConnection: async () => {
    let client
    try {
      client = await pool.connect()
      console.log("PostgreSQL pool connection successful!")
      return true
    } catch (err) {
      console.error("Failed to connect to PostgreSQL:", err.message)
      return false
    } finally {
      if (client) client.release()
    }
  },
}
