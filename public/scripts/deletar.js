const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = firebase.initializeApp(config);
const database = firebase.firestore(app);

function deleteProduct() {
  let docReference = database
    .collection("Produtos")
    .doc(document.getElementById("idProduct").value);

  docReference
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
