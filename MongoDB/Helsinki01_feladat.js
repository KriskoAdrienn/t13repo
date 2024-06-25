var MongoClient=require("mongodb").MongoClient
var url="mongodb+srv://T13KriskoAdrienn:Talanjolesz89@cluster0.tcxegkl.mongodb.net/"

async function helsinkiKollekcioLetrehozas(){
    try {
        const client=await MongoClient.connect(url)
        const db=client.db("T13")
        await db.createCollection("Helsinki")
        console.log("A Helsinki kollekció a T13 adatbázisban létrejött.")
        client.close();
    }
    catch(err){
        console.error("Hiba történt:", err)
    }
}

helsinkiKollekcioLetrehozas();