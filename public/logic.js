let addItem = document.getElementById("addItem");
let check = document.getElementById("check");

addItem.addEventListener("click", () => {

     let name = document.getElementById("itemName");
     let price = document.getElementById("itemPrice");
     let quanity = document.getElementById("itemQuanity");

     let ob = {
          name: name.value,
          price: price.value,
          quanity: quanity.value
     }

     $.post("/post/item", ob)
          .then( (res) => {
               console.log(res)
               name.value = "";
               price.value = "";
               quanity.value = "";
          })
})

check.addEventListener("click", () => {
     console.log("Clicked")
})