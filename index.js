const {MongoClient} = require("mongodb")

const uri = 'mongodb://127.0.0.1'

const client = new MongoClient(uri)

const main = async () =>{
await client.connect();
const db = client.db("dbName: shop") 
const collection = db.collection("products")
}

main()