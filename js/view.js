let number = 1;
const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'welcomeScreen':
            document.getElementById('app')
                .innerHTML = components.welcomeScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-to-test')
                .addEventListener('click', () => {
                    view.setActiveScreen('testScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            break;
        case 'mbtiScreen':
            document.getElementById('app')
                .innerHTML = components.mbtiScreen;
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            break;

        case 'testScreen':
            document.getElementById('app')
                .innerHTML = components.testScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            // let random = Math.floor(Math.random() * 120) + 1;
            // document.getElementById('question').innerText = model.questions[random];
            // document.getElementById('form-test')
            //     .addEventListener('submit', (e) => {
            //         e.preventDefault();

            //         number++;
            //         const score = document.getElementById('myRange')
            //         console.log(score.value)

            //         if (number < 25) {
            //             document.getElementById('question').innerText = model.questions[random];
            //             let random1 = Math.floor(Math.random() * 120) + 1;
            //             document.getElementById('question').innerText = model.questions[random1];
            //         } else if (number >= 25) {
            //             view.setActiveScreen('resultScreen');
            //         }
            //     })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('redirect-to-register').addEventListener('click', () => {
                view.setActiveScreen('registerScreen');
            })
            const answerform = document.getElementById("form-test")
            var answer = true
            var i = parseInt(Math.random()*16)
            max = i+4
            for (i; i < max; i++){
                for (var j in model.equation){
                    if (answer == true){
                        noQuestion = model.equation[j][0][i]
                        document.getElementById("question").innerText = model.questions[noQuestion]
                        console.log("question");
                        answer = false
                        if (answer == false){
                            answerform.addEventListener("submit", (event) => {
                                event.preventDefault()
                                const data = document.getElementById('myRange').value
                                console.log("answer");
                                if (i % 2 === 0){
                                    model.equation[j][1] += controller.gettingAnswer(data)
                                    console.log(model.equation[j][1])
                                    answer = true
                                }
                                else if (i % 2 === 1){
                                    model.equation[j][1] -= controller.gettingAnswer(data)
                                    console.log(model.equation[j][1])
                                    answer = true
                                }
                                // if (i === max && model.equation[j] === model.equation["leadership"]){
                                //     document.getElementById("submit").innerText = "DONE"
                                    
                                // }
                            })
                        }
                    }    
                }
            }
            // for(x in model.equation){
            //     console.log(model.equation[x][1]);
            // }
            break;
        case 'loginScreen':
            document.getElementById('app')
                .innerHTML = components.loginScreen;
            break;
        case 'registerScreen':
            document.getElementById('app')
                .innerHTML = components.loginScreen;

    }
}