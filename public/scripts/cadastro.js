const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

firebase.initializeApp(config);

function cadastrar() {
  if (
    document.getElementById("email").value == "" ||
    document.getElementById("password").value == ""
  ) {
    // pass
  } else {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        document.getElementById("email").value,
        document.getElementById("password").value
      )
      .then((user) => {
        console.log(user);
        location.href = "http://127.0.0.1:5500/pages/login.html";
      })
      .catch((error) => {
        console.error(error);
        if (error.code == "auth/email-already-in-use") {
          alert("Esse e-mail já está cadastrado no sistema.");
        }
      });
  }
}

document.getElementById("btn-registro").addEventListener("click", cadastrar);
