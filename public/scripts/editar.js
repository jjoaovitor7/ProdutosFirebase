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
    .update({})
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
  .addEventListener("click", editProduct);
