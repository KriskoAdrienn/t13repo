var MongoClient=require("mongodb").MongoClient
var url="mongodb+srv://T13KriskoAdrienn:Talanjolesz89@cluster0.tcxegkl.mongodb.net/"

async function egyeniArany(){
    try{
        const client=await MongoClient.connect(url);
        const db=client.db("T13");
        const collection=db.collection("Helsinki");


        const lekerdezesEredmenyei=await collection.find({
            $and: [{
                csapatmeret:1
            },
             {
                helyezes:1
             }
             ]
        },{ projection: { _id: 0, sportag: 1 } }).toArray();

        console.log("A legnagyobb méretű csapat: ",lekerdezesEredmenyei)
        client.close();
  
    }
    catch(err){
        console.error("Hiba a művelet végrehajtása közben: ",err);
    }
}

egyeniArany();