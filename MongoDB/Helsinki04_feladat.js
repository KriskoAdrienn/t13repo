var MongoClient=require("mongodb").MongoClient
var url="mongodb+srv://T13KriskoAdrienn:Talanjolesz89@cluster0.tcxegkl.mongodb.net/"

async function helsinkiDobogosHelyek(){
    try{
        const client=await MongoClient.connect(url);
        const db=client.db("T13");
        const collection=db.collection("Helsinki");
        console.log("A kapcsolódás sikeres")
        const lekerdezesEredmenyei=await collection.find({
            $or: [{
                helyezes:1
            },{
                helyezes:2
            },{
                helyezes:3
            },
            
             ]
        },{ projection:{ _id:0, versenyszam: 1 } }).toArray();

        console.log("Szűrt adatok: ",lekerdezesEredmenyei)
        client.close();
  
    }
    catch(err){
        console.error("Hiba a művelet végrehajtása közben: ",err);
    }
}

helsinkiDobogosHelyek();