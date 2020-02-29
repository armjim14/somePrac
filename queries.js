function API(app){
    app.post("/post/item", (req, res) => {
        console.log("got request");
        res.send({msg: "good"})
    })
}

module.exports = API;