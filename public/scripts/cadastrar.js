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

  let docRef = db
    .collection("Produtos")
    .doc(document.getElementById("idProduct").value);

  docRef.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      return alert("Já existe um produto com esse ID!");
    } else {
      docRef
        .set({
          name: document.getElementById("product").value,
          price: document.getElementById("priceProduct").value,
          exists: true,
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
  });
}

document
  .getElementById("btn-register-enviar")
  .addEventListener("click", addProduct);
