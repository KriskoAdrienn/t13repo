var MongoClient=require("mongodb").MongoClient
var url="mongodb+srv://T13KriskoAdrienn:Talanjolesz89@cluster0.tcxegkl.mongodb.net/"

async function legnagyobbCsapat(){
    try{
        const client=await MongoClient.connect(url);
        const db=client.db("T13");
        const collection=db.collection("Helsinki");

        const rendezesBeallitasai={csapatmeret: -1};
        const eredmeny=await collection.find().sort(rendezesBeallitasai).limit(1).toArray();

        console.log("A legnagyobb méretű csapat: ",eredmeny)
        client.close();
  
    }
    catch(err){
        console.error("Hiba a művelet végrehajtása közben: ",err);
    }
}

legnagyobbCsapat();