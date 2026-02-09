import mongoose from 'mongoose';
import * as config from 'config';


async function connect() {
  const dbUri = process.env.DB_CONNECTION_STRING;

  if (!dbUri) {
    console.error("❌ FATAL: DB_CONNECTION_STRING is missing in .env file");
    process.exit(1);
  }

  try {
    await mongoose.connect(dbUri);
    console.info("🚀 Database connected successfully to Cloud");
  } catch (error) {
    console.error("Could not connect to db");
    process.exit(1);
  }
}

export default connect;

