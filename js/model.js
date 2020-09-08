const model = {}
model.questions = undefined
model.register = async(data) => {
    try {
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + ' ' + data.lastName
        })
        firebase.auth().currentUser.sendEmailVerification()
        alert('The email has been registered, please check you email!')
        view.setActiveScreen('loginScreen')
    } catch (err) {
        console.log(err)
        alert(err.message)
    }
}
model.login = async(dataLogin) => {
    try {
        await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password)

    } catch (error) {
        alert(error.message)
    }
}
model.logout = async(dataLogin) => {
    await firebase.auth().signOut()
}
model.equation = {
    extroversion : [[1,6,23,34,20,21,26,23,43,50,58,52,63,111,98,112,99,118,101,117],0],
    adaptability : [[13,25,18,40,33,45,56,75,65,79,73,84,76,89,76,93,106,91,110,115],0],
    conscientiousness : [[4,8,9,14,11,24,16,29,36,46,61,51,66,97,74,113,86,114,94,116],0],
    neurotism : [[0,104,28,5,32,10,39,12,53,37,31,57,71,62,83,77,35,80,87,85],0],
    inquisitiveness : [[7,95,17,48,22,49,92,59,44,67,54,68,64,70,69,102,72,103,82,107],0],
    leadership : [[2,15,19,30,27,42,38,47,41,55,78,60,88,105,90,3,96,100,109,108],0]
}
model.gettingQuestions = () => {
    model.gettingEQuestion()
}
model.gettingEQuestion = () => {
    noQuestion = model.equation.extroversion[0][rannum]
    document.getElementById("question").innerText = model.questions[noQuestion]
    number++
    console.log(number)
    const answerform = document.getElementById("form-test")
    answerform.addEventListener("submit", function gettingEAnswer(event){
        event.preventDefault()
        const data = document.getElementById('myRange').value
        console.log("answer")
        if (rannum % 2 === 0){
            model.equation.extroversion[1] += controller.scoringAnswer(data)
            console.log("extroversion:")
            console.log(model.equation.extroversion[1])
        }
        else if (rannum % 2 === 1){
            model.equation.extroversion[1] -= controller.scoringAnswer(data)
            console.log("extroversion:")
            console.log(model.equation.extroversion[1])
        }
        answerform.removeEventListener("submit", gettingEAnswer)
        model.gettingAQuestion()
    })
}
model.gettingAQuestion = () => {
    noQuestion = model.equation.adaptability[0][rannum]
    document.getElementById("question").innerText = model.questions[noQuestion]
    number++
    console.log(number)
    const answerform = document.getElementById("form-test")
    answerform.addEventListener("submit", function gettingAAnswer(event){
        event.preventDefault()
        const data = document.getElementById('myRange').value
        console.log("answer")
        if (rannum % 2 === 0){
            model.equation.adaptability[1] += controller.scoringAnswer(data)
            console.log("adaptability:")
            console.log(model.equation.adaptability[1])
        }
        else if (rannum % 2 === 1){
            model.equation.adaptability[1] -= controller.scoringAnswer(data)
            console.log("adaptability:")
            console.log(model.equation.adaptability[1])
        }
        answerform.removeEventListener("submit", gettingAAnswer)
        model.gettingCQuestion()
    })
}
model.gettingCQuestion = () => {
    noQuestion = model.equation.conscientiousness[0][rannum]
    document.getElementById("question").innerText = model.questions[noQuestion]
    number++
    console.log(number)
    const answerform = document.getElementById("form-test")
    answerform.addEventListener("submit", function gettingCAnswer(event){
        event.preventDefault()
        const data = document.getElementById('myRange').value
        console.log("answer")
        if (rannum % 2 === 0){
            model.equation.conscientiousness[1] += controller.scoringAnswer(data)
            console.log("consientiousness:")
            console.log(model.equation.conscientiousness[1])
        }
        else if (rannum % 2 === 1){
            model.equation.conscientiousness[1] -= controller.scoringAnswer(data)
            console.log("consientiousness:")
            console.log(model.equation.conscientiousness[1])
        }
        answerform.removeEventListener("submit", gettingCAnswer)
        model.gettingNQuestion()

    })
}
model.gettingNQuestion = () => {
    noQuestion = model.equation.neurotism[0][rannum]
    document.getElementById("question").innerText = model.questions[noQuestion]
    number++
    console.log(number)
    const answerform = document.getElementById("form-test")
    answerform.addEventListener("submit", function gettingNAnswer(event){
        event.preventDefault()
        const data = document.getElementById('myRange').value
        console.log("answer")
        if (rannum % 2 === 0){
            model.equation.neurotism[1] += controller.scoringAnswer(data)
            console.log("neurotism:")
            console.log(model.equation.neurotism[1])
        }
        else if (rannum % 2 === 1){
            model.equation.neurotism[1] -= controller.scoringAnswer(data)
            console.log("neurotism:")
            console.log(model.equation.neurotism[1])
        }
        answerform.removeEventListener("submit", gettingNAnswer)
        model.gettingIQuestion()
    })
}
model.gettingIQuestion = () => {
    noQuestion = model.equation.inquisitiveness[0][rannum]
    document.getElementById("question").innerText = model.questions[noQuestion]
    number++
    console.log(number)
    const answerform = document.getElementById("form-test")
    answerform.addEventListener("submit", function gettingIAnswer(event){
        event.preventDefault()
        const data = document.getElementById('myRange').value
        console.log("answer")
        if (rannum % 2 === 0){
            model.equation.inquisitiveness[1] += controller.scoringAnswer(data)
            console.log("inquisitiveness:")
            console.log(model.equation.inquisitiveness[1])
        }
        else if (rannum % 2 === 1){
            model.equation.inquisitiveness[1] -= controller.scoringAnswer(data)
            console.log("inquisitiveness:")
            console.log(model.equation.inquisitiveness[1])
        }
        answerform.removeEventListener("submit", gettingIAnswer)
        model.gettingLQuestion()
    })
}
model.gettingLQuestion = () => {
    noQuestion = model.equation.leadership[0][rannum]
    document.getElementById("question").innerText = model.questions[noQuestion]
    number++
    console.log(number)
    const answerform = document.getElementById("form-test")
    answerform.addEventListener("submit", function gettingLAnswer(event){
        event.preventDefault()
        const data = document.getElementById('myRange').value
        console.log("answer")
        if (rannum % 2 === 0){
            model.equation.leadership[1] += controller.scoringAnswer(data)
            console.log("leadership:")
            console.log(model.equation.leadership[1])
        }
        else if (rannum % 2 === 1){
            model.equation.leadership[1] -= controller.scoringAnswer(data)
            console.log("leadership:")
            console.log(model.equation.leadership[1])
        }
        answerform.removeEventListener("submit", gettingLAnswer)
        if (number >= 24){
            view.setActiveScreen("resultScreen")
            return;
        }
        rannum++
        model.gettingEQuestion()
    })
}




