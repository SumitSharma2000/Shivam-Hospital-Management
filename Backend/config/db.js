const mongoose = require("mongoose");

const uri = "mongodb+srv://<username>:<password>@cluster0.mlrioal.mongodb.net/<dbname>?appName=Cluster0";

let dburl = uri.replace("<username>", process.env.DB_USERNAME);
dburl = dburl.replace("<password>", process.env.DB_PASSWORD);
dburl = dburl.replace("<dbname>", process.env.DB_DATABASE);

const connectDB = async () => {
  try {
    await mongoose.connect(dburl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to the database");
  } catch (err) {
    console.error("DB connection failed");
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
