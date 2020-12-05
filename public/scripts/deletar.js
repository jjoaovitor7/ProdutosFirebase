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
      alert("Produto não deletado devido a um erro!");
    });
}

document
  .getElementById("btn-delete-enviar")
  .addEventListener("click", deleteProduct);
