const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    document.querySelector("body").style.visibility = "visible";
  } else {
    document.querySelector("body").style.visibility = "hidden";
  }
});
