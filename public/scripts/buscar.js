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

function searchProduct() {
  const collectionReference = database.collection("Produtos");
  let nameProduct = document.getElementById("nameProduct").value;

  if (nameProduct == null || nameProduct == "" || nameProduct == " ") {
    return;
  }

  collectionReference
    .where("name", "==", document.getElementById("nameProduct").value)
    .get()
    .then(function (querySnapshot) {
      document.querySelector("textarea").value = "";

      querySnapshot.forEach(function (doc) {
        document.querySelector("textarea").value +=
          doc.id + ":" + doc.data().name + " => R$" + doc.data().price + "\n";
      });
    })
    .catch(function (error) {
      console.error(error);
      alert("Produto não buscado devido a um erro!");
    });
}

document
  .getElementById("btn-search-enviar")
  .addEventListener("click", searchProduct);
