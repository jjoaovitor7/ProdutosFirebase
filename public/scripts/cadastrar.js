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

function addProduct() {
  if (document.getElementById("product").value == " ") {
    return alert("Cadê o produto?");
  }

  db.collection("Produtos")
    .doc(document.getElementById("idProduct").value)
    .set({
      name: document.getElementById("product").value,
      price: document.getElementById("priceProduct").value,
    })
    .then(function () {
      // console.log(docRef.id);
      alert("Produto cadastrado!");
    })
    .catch(function (error) {
      console.error(error);
      alert("Produto não cadastrado devido a um erro!");
    });
}

function deleteProduct() {
  db.collection("Produtos")
    .doc(document.getElementById("idProduct").value)
    .delete()
    .then(function () {
      // console.log(docRef.id);
      alert("Produto deletado!");
    })
    .catch(function (error) {
      console.error(error);
      alert("Produto não deltado devido a um erro!");
    });
}

document
  .getElementById("btn-register-enviar")
  .addEventListener("click", addProduct);

document
  .getElementById("btn-delete-enviar")
  .addEventListener("click", deleteProduct);
