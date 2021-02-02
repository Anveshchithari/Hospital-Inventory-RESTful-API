var url = "mongodb://localhost:27017";
var client = require("mongodb").MongoClient;
client.connect(url, (err, db) => {
    try {
        console.log("connected");
        var dbo = db.db("test");
        dbo.collection("Hospital").insert({"hId":"H2","name":"Insert Hospital","location":"3.455,77.76","Address":"v zdbz,bzg vf"});
        var data = dbo.collection('Hospital').find();
        data.each((err, doc) => {
            try {
                console.log(doc);
            } catch(err) {
                console.log(err);
            }
        })
    } catch (err) {
        console.log(err);
    }
});