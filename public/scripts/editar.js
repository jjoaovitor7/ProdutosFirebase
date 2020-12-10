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

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    document.querySelector("body").style.visibility = "visible";
  } else {
    document.querySelector("body").style.visibility = "hidden";
  }
});

function editProduct() {
  let productName = document.getElementById("product").value;
  let productPrice = document.getElementById("priceProduct").value;

  let docReference = database
    .collection("Produtos")
    .doc(document.getElementById("idProduct").value);

  if (
    productName != null &&
    productName != "" &&
    productName != " " &&
    productPrice != null &&
    productPrice != "" &&
    productPrice != " "
  ) {
    docReference
      .update({
        name: productName,
        price: productPrice,
      })
      .then(function () {
        // console.log(docRef.id);
        alert("Produto editado!");
      })
      .catch(function (error) {
        console.error(error);
        alert("Produto não editado devido a um erro!");
      });
  } else if (
    productName != null &&
    productName != "" &&
    productName != " " &&
    (productPrice == null || productPrice == "" || productPrice == " ")
  ) {
    docReference
      .update({
        name: productName,
      })
      .then(function () {
        // console.log(docRef.id);
        alert("Produto editado!");
      })
      .catch(function (error) {
        console.error(error);
        alert("Produto não editado devido a um erro!");
      });
  } else if (
    (productName == null || productName == "" || productName == " ") &&
    productPrice != null &&
    productPrice != "" &&
    productPrice != " "
  ) {
    docReference
      .update({
        price: productPrice,
      })
      .then(function () {
        // console.log(docRef.id);
        alert("Produto editado!");
      })
      .catch(function (error) {
        console.error(error);
        alert("Produto não editado devido a um erro!");
      });
  } else {
    alert("Erro! Nenhuma condição foi atendida.");
  }
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
