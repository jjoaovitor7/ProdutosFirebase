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

function addProduct() {
  if (document.getElementById("product").value == " ") {
    return alert("Cadê o produto?");
  }

  let docReference = database
    .collection("Produtos")
    .doc(document.getElementById("idProduct").value);

  docReference.get().then((docSnapshot) => {
    if (docSnapshot.exists) {
      return alert("Já existe um produto com esse ID!");
    } else {
      docReference
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
