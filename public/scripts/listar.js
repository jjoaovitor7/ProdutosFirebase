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

const collectionReference = database.collection("Produtos");

collectionReference
  .where("exists", "==", true)
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
    alert("Erro ao listar os produtos =/");
  });
