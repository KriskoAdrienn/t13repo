var MongoClient=require("mongodb").MongoClient
var url="mongodb+srv://T13KriskoAdrienn:@cluster0.tcxegkl.mongodb.net/"

async function helsinkiTornaUszasListazas(){
    try{
        const client=await MongoClient.connect(url);
        const db=client.db("T13");
        const collection=db.collection("Helsinki");
        console.log("A kapcsolódás sikeres")
        const lekerdezesEredmenyei=await collection.find({
            $or: [{
                sportag:"uszas"
            },
             {
                sportag:"torna"
             }
             ]
        },{ projection:{ _id:0, sportag: 1, versenyszam: 1 } }).toArray();

        console.log("Szűrt adatok: ",lekerdezesEredmenyei)
        client.close();
  
    }
    catch(err){
        console.error("Hiba a művelet végrehajtása közben: ",err);
    }
}

helsinkiTornaUszasListazas();
