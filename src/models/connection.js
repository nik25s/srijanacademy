const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dbSrijan:SrijanAcademy@cluster0.raoab.mongodb.net/SrijanAcademy?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

try{
     client.connect(err => {
      const collection = client.db("SrijanAcademy").collection("loggedin_users");
      // perform actions on the collection object
      console.log("Connected to MongoDB");
      listDatabases(client);
                })
    } catch (e) {
      console.error(e);
    } finally {
           client.close();
    }

main().catch(console.error); 


 async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
const Course = require("./course_model");