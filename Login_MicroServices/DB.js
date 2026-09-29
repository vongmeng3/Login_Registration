const mongoose = require('mongoose');
const uri = "mongodb://vongmeng125_db_user:user123@ac-tre9d0b-shard-00-00.nbuifjn.mongodb.net:27017,ac-tre9d0b-shard-00-01.nbuifjn.mongodb.net:27017,ac-tre9d0b-shard-00-02.nbuifjn.mongodb.net:27017/?ssl=true&replicaSet=atlas-iq3fx1-shard-0&authSource=admin&appName=Mydatabase";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await mongoose.disconnect();
  }
}
run().catch(console.dir);
module.exports = mongoose;
