function API(app, conn){
    app.post("/post/item", (req, res) => {

        let { name, price, quanity } = req.body;

        conn.query(`INSERT INTO items (itemName, price, quanity) VALUES ("${name}", ${price}, ${quanity});`, (err, data) => {
            if (err) { return console.error(err); }
            console.log(data)
            res.send({added: true})
        })
    })
}

module.exports = API;