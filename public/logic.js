let addItem = document.getElementById("addItem");

addItem.addEventListener("click", () => {

     let ob = {
          test: "test"
     }

     console.log("here")

     $.post("/post/item", ob)
          .then( (res) => {
               console.log(res)
          })
})