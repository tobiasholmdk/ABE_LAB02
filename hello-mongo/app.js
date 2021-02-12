const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://dbuser:Holmdk009@cluster0.qegoz.mongodb.net/Mongotest?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var students = [];

var student = {Name:"Tobias", something: "asdas"};
var student1 = {Name:"Jesper", something: "asdas"};
var student2 = {Name:"Thomas", something: "asdas"};

students.push(student);
students.push(student1);
students.push(student2);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    
    const db = client.db('Mongotest');

    const collection = db.collection('students');

    let result = await collection.insertMany(students);

    console.log(result);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
