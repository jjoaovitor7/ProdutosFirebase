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

db.collection("Produtos")
  .where("exists", "==", true)
  .get()
  .then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      document.querySelector("textarea").value += doc.id + ":" + doc.data().name + " => R$" + doc.data().price + "\n";
    });
  })
  .catch(function (error) {
    console.error(error);
    alert("Erro ao listar os produtos!");
  });
