const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'welcomeScreen':
            document.getElementById('app')
                .innerHTML = components.welcomeScreen;
            const redirecToMbti = document.getElementById('redirect-to-mbti');
            redirecToMbti.addEventListener('click', () => {
                view.setActiveScreen('mbtiScreen')
            })
            document.getElementById('redirect-to-test')
                .addEventListener('click', () => {
                    view.setActiveScreen('testScreen');
                })
            document.getElementById('redirect-to-login')
                .addEventListener('click', () => {
                    view.setActiveScreen('loginScreen');
                })
            document.getElementById('redirect-to-register')
                .addEventListener('click', () => {
                    view.setActiveScreen('registerScreen');
                })

            break;
        case 'mbtiScreen':
            document.getElementById('app')
                .innerHTML = components.mbtiScreen;
            document.getElementById('redirect-to-login')
                .addEventListener('click', () => {
                    view.setActiveScreen('loginScreen');
                })
            document.getElementById('redirect-to-register').addEventListener('click', () => {
                view.setActiveScreen('registerScreen');
            })
            break;

        case 'testScreen':
            document.getElementById('app')
                .innerHTML = components.testScreen;
            document.getElementById('redirect-to-login')
                .addEventListener('click', () => {
                    view.setActiveScreen('loginScreen');
                })
            document.getElementById('redirect-to-register').addEventListener('click', () => {
                view.setActiveScreen('registerScreen');
            });
            var answer = true
            for (var i = 0; i < 4; i++){
                for (var j in model.equation){
                    if (answer == true){
                        document.getElementById("question").innerText = j[0][i]
                        answer = false
                        if (answer == false){
                            answerform.addEventListener("submit", (event) => {
                                event.preventDefault()
                                const data = document.getElementById('myRange').value 
                        })
                        if (i % 2 === 0){
                            j[1] += controller.gettingAnswer(data)
                        }
                        else{
                            j[1] -= controller.gettingAnswer(data)
                        }
                    }
                    }    
                }
            }
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