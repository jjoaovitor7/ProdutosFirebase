var config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

let app = firebase.initializeApp(config);
let db = firebase.firestore(app);

function editProduct() {
  db.collection("Produtos")
    .doc(document.getElementById("idProduct").value)
    .update({
      name: document.getElementById("product").value,
      price: document.getElementById("priceProduct").value,
    })
    .then(function () {
      // console.log(docRef.id);
      alert("Produto editado!");
    })
    .catch(function (error) {
      console.error(error);
      alert("Produto não editado devido a um erro!");
    });
}

document
  .getElementById("btn-edit-enviar")
  .addEventListener("click", function () {
    document.getElementById("idProductLabel").style.display = "none";
    document.getElementById("idProduct").style.display = "none";
    document.querySelector(".esconder").style.display = "flex";
    document.getElementById("btn-edit-enviar").style.display = "none";
    document.getElementById("btn-edit-enviar-aux").style.display = "block";
  });

document
  .getElementById("btn-edit-enviar-aux")
  .addEventListener("click", editProduct);
