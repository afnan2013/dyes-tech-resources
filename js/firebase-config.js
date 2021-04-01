  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBojniV_4IpUz6dgCkmVNK3FD2RAqFa_cU",
    authDomain: "dyes-tech-resources.firebaseapp.com",
    projectId: "dyes-tech-resources",
    storageBucket: "dyes-tech-resources.appspot.com",
    messagingSenderId: "751880201069",
    appId: "1:751880201069:web:c10eedd300bba05e14f064",
    measurementId: "G-QJLB95HJXS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  const db = firebase.firestore();
  //const storage = firebase.storage().ref();
  // update firestore settings
  db.settings({ timestampsInSnapshots: true });

  //console.log(db);