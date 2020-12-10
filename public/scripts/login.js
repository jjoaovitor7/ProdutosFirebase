const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

firebase.initializeApp(config);

function logar() {
  if (
    document.getElementById("email").value == "" ||
    document.getElementById("password").value == ""
  ) {
    // pass
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        document.getElementById("email").value,
        document.getElementById("password").value
      )
      .then((user) => {
        console.log(user);
        location.href = "http://127.0.0.1:5500/pages/home.html";
      })
      .catch((error) => {
        console.log(error);
        if (error.code == "auth/wrong-password") {
          alert("Senha errada!");
        }
      });
  }
}

document.getElementById("btn-login").addEventListener("click", logar);
