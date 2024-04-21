require('dotenv').config();
const mongoose = require('mongoose');

const database_url = process.env.DATABASE_URL

async function connectToDatabase() {
  try {
    await mongoose.connect(database_url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("DB connection Error: ", error));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToDatabase;
