  const firebaseConfig = {
    apiKey: "AIzaSyD6ZKcS8wAa7Q25TPN6QpcXi-ryJ7jPs44",
    authDomain: "cityvision-web.firebaseapp.com",
    databaseURL: "https://cityvision-web-default-rtdb.firebaseio.com",
    projectId: "cityvision-web",
    storageBucket: "cityvision-web.firebasestorage.app",
    messagingSenderId: "28636447005",
    appId: "1:28636447005:web:da2c92e8e565fc0f25e1f4"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contactFormDB = firebase.database().ref('CityVision');

  document.getElementById('contact-form').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var mobile = getElementVal('mobile');
    var email = getElementVal('email');
    var type = getElementVal('type');

    saveMessages(name, mobile, email, type);

    //enable alert
    document.querySelector('.alert').style.display = 'block';

    //remove the alert after 3 seconds
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // reset the form 
    document.getElementById('contact-form').reset();
  }
  
  const saveMessages = (name, mobile, email, type) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        mobile : mobile,
        email : email,
        type : type,
    });
  }


  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }