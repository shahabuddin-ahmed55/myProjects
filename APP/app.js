console.log("Shahabuddin")
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5GAKkxG6JVe6Pskv99bMDvZvmMcvXFvQ",
    authDomain: "hackhaton-668d6.firebaseapp.com",
    projectId: "hackhaton-668d6",
    storageBucket: "hackhaton-668d6.appspot.com",
    messagingSenderId: "37871412480",
    appId: "1:37871412480:web:fcdaff8a1ea34110737fe5",
    measurementId: "G-JGJEFP1MY0"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const firestore = firebase.firestore();


  document.getElementById('login').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password); 
    document.getElementById('login').style = "display: block";
    document.getElementById('signup').style = "display: none";

  })