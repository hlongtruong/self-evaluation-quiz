const init = async() => {
    var firebaseConfig = {
        apiKey: "AIzaSyBGJ8AJ0kUpAe3AxR2dPNhLFZPzb2O7PLg",
        authDomain: "in-to-out-fac3e.firebaseapp.com",
        databaseURL: "https://in-to-out-fac3e.firebaseio.com",
        projectId: "in-to-out-fac3e",
        storageBucket: "in-to-out-fac3e.appspot.com",
        messagingSenderId: "420316197770",
        appId: "1:420316197770:web:663137f3e2936d3ae3ce73"
    };
    firebase.initializeApp(firebaseConfig);
    console.log('window loaded')

    model.questions = await firestoreFunction()
    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user)
        if (user) {
            if (user.emailVerified) {
                model.currentUser = {
                    displayName: user.displayName,
                    email: user.email
                }
                view.setActiveScreen('welcomeScreen')
            } else {
                view.setActiveScreen('loginScreen')
                alert('Please verify your email')
            }
        } else {
            view.setActiveScreen('loginScreen')
        }
    });
}
window.onload = init;
const listquestion = undefined;
firestoreFunction = async() => {
    const documentId = "ChKfnVYx7sk9MfM1cW79"
    const response = await firebase.firestore().collection("Questions").doc(documentId).get()
    const data = getDataFromDoc(response)
    questions = data["Questions"];


    return questions
}


getDataFromDoc = (doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
}
getDataFromDocs = (docs) => {
    return docs.map(item => getDataFromDoc(item))
}