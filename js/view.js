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
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
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
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
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
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            document.getElementById('redirect-to-register').addEventListener('click', () => {
                view.setActiveScreen('registerScreen');
            })
            const answerform = document.getElementById("form-test")
            var answer = true
            var i = parseInt(Math.random() * 16)
            max = i + 4
            for (i; i < max; i++) {
                for (var j in model.equation) {
                    if (answer == true) {
                        noQuestion = model.equation[j][0][i]
                        document.getElementById("question").innerText = model.questions[noQuestion]
                        console.log("question");
                        answer = false
                    }
                    if (answer == false){
                        answerform.addEventListener("submit", (event) => {
                            event.preventDefault()
                            const data = document.getElementById('myRange').value
                            console.log("answer");
                            if (i % 2 === 0){
                                model.equation[j][1] += controller.gettingAnswer(data)
                                console.log(model.equation["extroversion"][1])
                                console.log(model.equation["adaptability"][1])
                                console.log(model.equation["conscientiousness"][1])
                                console.log(model.equation["neurotism"][1])
                                console.log(model.equation["wisdom"][1]);
                                console.log(model.equation["leadership"][1]);
                                answer = true
                            }
                            else if (i % 2 === 1){
                                model.equation[j][1] -= controller.gettingAnswer(data)
                                console.log(model.equation["extroversion"][1])
                                console.log(model.equation["adaptability"][1])
                                console.log(model.equation["conscientiousness"][1])
                                console.log(model.equation["neurotism"][1])
                                console.log(model.equation["wisdom"][1]);
                                console.log(model.equation["leadership"][1]);
                                answer = true
                            }
                        })
                    }
                        
                }
            }
            // for(x in model.equation){
            //     console.log(model.equation[x][1]);
            // }
            break;
        case 'loginScreen':
            document.getElementById('app').innerHTML = components.loginScreen
            document.getElementById('redirect-to-register')
                .addEventListener('click', () => {
                    view.setActiveScreen('registerScreen')
                })
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()
                loginForm.email.value = loginForm.email.value.trim()
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                }
                controller.login(data)
            })
            break;
        case 'registerScreen':
            document.getElementById('app')
                .innerHTML = components.registerScreen
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (event) => {
                event.preventDefault()
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value
                }
                console.log(data)
                controller.register(data)
            })
            document.getElementById('redirect-to-login')
                .addEventListener('click', () => {
                    view.setActiveScreen('loginScreen')
                })
            break;
        case 'resultScreen':
            document.getElementById('app')
                .innerHTML = components.resultScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
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
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NPTScreen':
            document.getElementById('app')
                .innerHTML = components.NPTScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
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
            document.getElementById('redirect-to-NKH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NKHScreen')
                })
            document.getElementById('redirect-to-NTD')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTDScreen')
                })
            document.getElementById('redirect-to-NQL')
                .addEventListener('click', () => {
                    view.setActiveScreen('NQLScreen')
                })
            document.getElementById('redirect-to-NNX')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNXScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NNGScreen':
            document.getElementById('app')
                .innerHTML = components.NNGScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toS')
                .addEventListener('click', () => {
                    view.setActiveScreen('SScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')
                })
            document.getElementById('redirect-to-NCC')
                .addEventListener('click', () => {
                    view.setActiveScreen('NCCScreen')
                })
            document.getElementById('redirect-to-NLTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NLTHScreen')
                })
            document.getElementById('redirect-to-NCD')
                .addEventListener('click', () => {
                    view.setActiveScreen('NCDScreen')
                })
            document.getElementById('redirect-to-NTCH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTCHScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'SScreen':
            document.getElementById('app')
                .innerHTML = components.SScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
                })
            document.getElementById('redirect-toNPT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NPTScreen')
                })
            document.getElementById('redirect-toNNG')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNGScreen')
                })
            document.getElementById('redirect-toNTH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTHScreen')

                })
            document.getElementById('redirect-to-NDNNV')
                .addEventListener('click', () => {
                    view.setActiveScreen('NDNNVScreen')
                })
            document.getElementById('redirect-to-NND')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNDScreen')
                })
            document.getElementById('redirect-to-NBH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NBHScreen')
                })
            document.getElementById('redirect-to-NQT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NQTScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NTHScreen':
            document.getElementById('app')
                .innerHTML = components.NTHScreen;
            document.getElementById('redirect-to-mbti')
                .addEventListener('click', () => {
                    view.setActiveScreen('mbtiScreen')
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
            document.getElementById('redirect-to-NCH')
                .addEventListener('click', () => {
                    view.setActiveScreen('NCHScreen')
                })
            document.getElementById('redirect-to-NNS')
                .addEventListener('click', () => {
                    view.setActiveScreen('NNSScreen')
                })
            document.getElementById('redirect-to-NTT')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTTScreen')
                })
            document.getElementById('redirect-to-NTD')
                .addEventListener('click', () => {
                    view.setActiveScreen('NTDScreen')
                })
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NKHScreen':
            document.getElementById('app')
                .innerHTML = components.NKHScreen;
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NTDScreen':
            document.getElementById('app')
                .innerHTML = components.NTDScreen;
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NQLSCreen':
            document.getElementById('app')
                .innerHTML = components.NQLScreen;
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NNXScreen':
            document.getElementById('app')
                .innerHTML = components.NNXScreen;
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NCCScreen':
            document.getElementById('app')
                .innerHTML = components.NCCScreen;
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NLTHScreen':
            document.getElementById('app')
                .innerHTML = components.NLTHScreen;
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NCDScreen':
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
        case 'NTCHScreen':
            document.getElementById('logout')
                .addEventListener('click', () => {
                    model.logout();
                })
            break;
    }
}